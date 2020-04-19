'use strict'
const UserAttributeBase = require("../../repository/base/user_attribute.base");
const UserBase = require("../../repository/base/user.base");  

var DeleteUser = {

    deleteUser: function(params){
        if(params.uid == null){
            return Promise.reject("need params uid for delete user")
        }
        return UserAttributeBase.deleteUserAttribute(params.uid).then(user=>{
            if(user){
                return UserBase.deleteUser(params.uid)
            }else{
                return Promise.reject("user not found")
            }
        }).then(deleted=>{
            if(deleted){
                return Promise.resolve("user has been deleted")
            }else{
                return Promise.reject("faulec deleted user")
            }
        })
    }
}

module.exports = DeleteUser;