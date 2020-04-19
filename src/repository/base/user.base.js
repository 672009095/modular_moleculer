'use strict'

const CRUD = require("../../helpers/CRUD");
const User = require("../../entity/user/user.model");

var UserBase= {
    createUser: function(){
        return CRUD.create(User,{});
    },
    updateUser: function(uid_,status_){
        return CRUD.update(User,{uid:uid_},{status:status_});
    },
    deleteUser: function(uid_){
        return CRUD.delete(User,{uid:uid_});
    },
    listUser: function(offset, limit, orderBy, sort, where){
        return CRUD.list(User,offset,limit,orderBy,sort,where,null)
    },
    getUser: function(where={}){
        return CRUD.get(User,where);
    }
}

module.exports = UserBase;