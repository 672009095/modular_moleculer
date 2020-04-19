"use strict";
const Sequelize = require("sequelize");
const dbConf = require('../../../config/adapter/user.adapter');
const UserAttribute = require("../user/user_attribute.model");

const User = dbConf.define("TM_user",{
    uid: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    created_at:{
        type: Sequelize.DATE,
        allowNull: true
    },
    updated_at:{
        type: Sequelize.DATE,
        allowNull: true
    },
    status:{
        type: Sequelize.ENUM('unregistered','registered','deleted'),
        allowNull: true
    }

},{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
});
User.hasOne(UserAttribute, { foreignKey: 'uid', as: 'attributes' });
module.exports = User;