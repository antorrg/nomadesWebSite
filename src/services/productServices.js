import { Product, Item, sequelize } from "../db.js";
import eh from '../utils/errorHandlers.js'
import NodeCache from "node-cache";
import help from "./helpers.js";

const cache = new NodeCache({ stdTTL: 1800 }); // TTL (Time To Live) de media hora

export default {
createProduct : async (title1, landing1, info_header1, info_body1, items1 ) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        const product = await Product.findOne({
            where:{title : title1

            }, transaction
        });
        if(product){eh.throwError('Este titulo ya existe', 400)};
        const newProduct = await Product.create({
            title:title1,
            landing: landing1,
            info_header:info_header1,
            info_body:info_body1,
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
    const productFound = await Product.findByPk(id);
    if(!productFound){eh.throwError('Ocurrio un error, objeto no encontrado', 404)};
    const newItem = await Item.create({
        img:img,
        text: text,})
    await productFound.addItem(newItem)
    return { message: "Item creado exitosamente"}
} catch (error) {throw error;}
},

getProduct : async () => {
    try {
        let products = cache.get('products');
        if (products) {
                       return {products: products,
                               cache: true 
                              }
                        }// Devolver los datos en caché si existen}
        const dataFound = await Product.findAll({
             include :[{
                model: Item,
                attributes:['id', 'img', 'text', 'ProductId'],
           },],
        })
        if(!dataFound){eh.throwError('Dato no hallado', 404)}
        if(dataFound.length === 0)return help.dataEmptyPage()
        const data = help.productCleaner(dataFound, false)
        cache.set('products', data);
        return {products: data,
                cache: false
                }
    } catch (error) {throw error;}
},
getById : async (id) => {
    try {
        const data = await Product.findByPk(id,{
            where:{
                deleteAt:false,
            },
                include : [{
                    model: Item,
                    attributes: ['id', 'img', 'text', 'ProductId'],
                }]
        })
        if(!data){eh.throwError('Dato no hallado', 404)}
        const dataFound = help.productCleaner(data, true)
        return dataFound
    } catch (error) {throw error;}
},
getDetail : async (id) => {
    try {
        const itemFound = await Item.findByPk(id,{
            where: {enable:true,}});
        if(!itemFound){eh.throwError('Dato no hallado', 404)}
        const item = help.aux(itemFound, true)
        return item;
    } catch (error) {throw error;}
},
updProduct : async (id, newData) => {
    try {
        const productFound = await Product.findByPk(id);
        if(!productFound){eh.throwError('Error inesperado, dato no hallado!',404)}
        const parsedData = {
            title: newData.title,
            landing: newData.landing,
            info_header: newData.info_header,
            info_body: newData.info_body,
            enable: Boolean(newData.enable),
            deleteAt: Boolean(newData.deleteAt)}
        const productUpd = await productFound.update(parsedData)
        if (productUpd) {
            cache.del('products');
            }
        return productUpd;
    } catch (error) {throw error;}
},

updItem: async (id, newData)=>{
    try {
        const itemFound = await Item.findByPk(id);
    if(!itemFound){eh.throwError('Error inesperado, item no hallado!',404)}
    const parsedData = {
        img: newData.img,
        text: newData.text,
        enable: Boolean(newData.enable)}
    const itemUpd = itemFound.update(parsedData)
    return itemUpd
    } catch (error) {throw error;}
},

delProduct: async (id) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        // Encontrar el Home por ID
        const product = await Product.findByPk(id, { transaction });
        if (!product) {eh.throwError('Producto no hallado', 404)}

        // Borrar los Items asociados
        await Item.destroy({
            where: { ProductId: id }, transaction});

        // Borrar el Home
        await product.destroy({ transaction });
        await transaction.commit();
        return { message: 'Producto y sus items asociados borrados exitosamente' };
    } catch (error) {
        if (transaction) { await transaction.rollback(); }; throw error;}
},
delItem: async (id) => {
    try {
        // Encontrar el Home por ID
        const item = await Item.findByPk(id);
        if (!item) {eh.throwError('Item no hallado', 404)}
        // Borrar los Items asociados
        await item.destroy();
        return { message: 'Item borrado exitosamente' };
    } catch (error) {
        throw error;}
},
};
