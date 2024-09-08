import { DataTypes } from'sequelize';

export default (sequelize) => {
    sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        title: { type: DataTypes.STRING, allowNull: false },
        landing: { type: DataTypes.STRING, allowNull: false },
        logo: {type: DataTypes.STRING,allowNull: false},
        info_header: {type:DataTypes.STRING, allowNull: false},
        info_body:{type: DataTypes.TEXT, allowNull: true},
        url: { type: DataTypes.STRING, allowNull: false},
        enable: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        deleteAt:{
          type: DataTypes.BOOLEAN,
          defaultValue:false
      } 
    },{timestamps:false});
};
