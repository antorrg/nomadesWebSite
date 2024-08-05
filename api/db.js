import {Sequelize} from 'sequelize'
import models from './models/index.js'
import env from './envConfig.js'

const sequelize = new Sequelize(env.ConnectDb,{
 logging:false,          
 native: false,
 dialectOptions: {
         ssl: {
            require: true,
           }
         }
});



Object.values(models).forEach((model)=>model(sequelize));

const {
    User,
    Page,
    Item,
}= sequelize.models;

//Asociations:
Page.hasMany(Item)
Item.belongsTo(Page)

export {
    User,
    Page,
    Item,
    sequelize,
}