import { Page, Item, sequelize } from "../db.js";
import NodeCache from "node-cache";
import help from "./helpers.js";

const cache = new NodeCache({ stdTTL: 1800 }); // TTL (Time To Live) de media hora

export default {
createHome : async (title1, landing1, logo1, info_header1, info_body1, url1, items1 ) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        const product = await Page.findOne({
            where:{title : title1

            }, transaction
        });
        if(product){const error = new Error('This title already exists'); error.status = 400; throw error};
        const newProduct = await Page.create({
            title:title1,
            landing: landing1,
            logo:logo1,
            info_header:info_header1,
            info_body:info_body1,
            url:url1,
        },{transaction});  
        const createdItems = await Promise.all(
            items1.map(async(item)=> {
                const newItem = await Item.create({
                    img : item.img,
                    text: item.text,
                },{transaction})

            await newProduct.addItem(newItem, {transaction})    
            return newItem;
            })
        );
        await transaction.commit()
        return {info: newProduct,
            items: createdItems}
    } catch (error) {
        if (transaction) { await transaction.rollback();}; throw error;}
},

addNewItem: async (img, text, id) => {
try {
    const homeFound = await Page.findByPk(id);
    if(!homeFound){const error = new Error('Ocurrio un error, objeto no encontrado'); error.status = 500; throw error};
    const newItem = await Item.create({
        img:img,
        text: text,})
    await homeFound.addItem(newItem)
    return homeFound
} catch (error) {throw error;}
},

getHome : async () => {
    try {
        let pages = cache.get('pages');
        if (pages) {
                       return {pages: pages,
                               cache: true 
                              }
                        }// Devolver los datos en caché si existen}
        const dataFound = await Page.findAll({
             include :[{
                model: Item,
                attributes:['id', 'img', 'text', 'PageId'],
           },],
        })
        if(!dataFound){const error = new Error('Dato no hallado'); error.status = 404; throw error;}
        if(dataFound.length === 0)return help.dataEmptyPage()
        const data = help.homeCleaner(dataFound, false)
        cache.set('pages', data);
        return {pages: data,
                cache: false
                }
    } catch (error) {throw error;}
},
getById : async (id) => {
    try {
        const data = await Page.findByPk(id,{
            where:{
                deleteAt:false,
            },
                include : [{
                    model: Item,
                    attributes: ['id', 'img', 'text', 'PageId'],
                }]
        })
        if(!data){const error = new Error('Dato no hallado'); error.status = 404; throw error;}
        const dataFound = help.homeCleaner(data, true)
        return dataFound
    } catch (error) {throw error;}
},
getDetail : async (id) => {
    try {
        const itemFound = await Item.findByPk(id,{
            where: {enable:true,}});
        if(!itemFound){const error = new Error('Dato no hallado'); error.status = 404; throw error;}
        const item = help.aux(itemFound, true)
        return item;
    } catch (error) {throw error;}
},
updHome : async (id, newData) => {
    try {
        const homeFound = await Page.findByPk(id);
        if(!homeFound){const error = new Error('Unexpected error, page not found'); error.status = 500; throw error}
        const parsedData = {
            title: newData.title,
            logo: newData.logo,
            landing: newData.landing,
            info_header: newData.info_header,
            info_body: newData.info_body,
            url: newData.url,
            enable: Boolean(newData.enable),
            deleteAt: Boolean(newData.deleteAt)}
        const homeUpd = await homeFound.update(parsedData)
        return homeUpd;
    } catch (error) {throw error;}
},

updItem: async (id, newData)=>{
    try {
        const itemFound = await Item.findByPk(id);
    if(!itemFound){const error = new Error('Unexpected error, item not found'); error.status = 500; throw error}
    const parsedData = {
        img: newData.img,
        text: newData.text,
        enable: Boolean(newData.enable)}
    const itemUpd = itemFound.update(parsedData)
    return itemUpd
    } catch (error) {throw error;}
},

delHome: async (id) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        // Encontrar el Home por ID
        const home = await Page.findByPk(id, { transaction });
        if (!home) {const error = new Error('Home not found'); error.status = 404; throw error;}

        // Borrar los Items asociados
        await Item.destroy({
            where: { HomeId: id }, transaction});

        // Borrar el Home
        await home.destroy({ transaction });
        await transaction.commit();
        return { message: 'Home and associated items deleted successfully' };
    } catch (error) {
        if (transaction) { await transaction.rollback(); }; throw error;}
},
};
