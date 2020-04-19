'use strict'

const CRUD = require("../../helpers/CRUD");
const UserAttribute = require("../../entity/user/user_attribute.model");

var UserAttributeBase= {
    createUserAttribbute: function(data_){
        return CRUD.create(UserAttribute,data_);
    },
    updateUserAttribute: function(uid_,data_){
        return CRUD.update(UserAttribute,{uid:uid_},data_);
    },
    deleteUserAttribute: function(uid_){
        return CRUD.delete(UserAttribute,{uid:uid_});
    },
    listUserAttribute: function(offset, limit, orderBy, sort, where){
        return CRUD.list(UserAttribute,offset,limit,orderBy,sort,where,null)
    },
    getUserAttribute: function(where={}){
        return CRUD.get(UserAttribute,where);
    }
}

module.exports = UserAttributeBase;