"use strict";
const Sequelize = require("sequelize");
const dbConf = require('../../../config/adapter/user.adapter');

const UserAttribute = dbConf.define("TM_user_attribute",{
    uid_attribute: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    uid:{
        type: Sequelize.BIGINT,
        allowNull:false,
        foreignKey: true
    },
    email:{
        type: Sequelize.STRING(45),
        allowNull: true,
        unique: true
    },
    first_name:{
        type: Sequelize.STRING(45),
        allowNull: true
    },
    last_name:{
        type: Sequelize.STRING(45),
        allowNull: true
    },
    avatar:{
        type: Sequelize.STRING(45),
        allowNull: true
    },
    gender:{
        type: Sequelize.ENUM("L","P"),
        allowNull: true
    },
    birthdate:{
        type: Sequelize.STRING(45),
        allowNull: true
    },
    phone:{
        type: Sequelize.STRING(45),
        allowNull: true
    },
    password:{
        type: Sequelize.STRING(45),
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = UserAttribute;