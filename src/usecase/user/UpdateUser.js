'use strict'
const UserAttributeBase = require("../../repository/base/user_attribute.base");
const UserBase = require("../../repository/base/user.base");
var user_attribute = {
    email:"",
    first_name:"",
    last_name:"",
    avatar:"",
    gender:"U",
    birthdate:"",
    phone:"",
    password:""
}

var UpdateUser = {

    updateUserStatus: function(params){
        if(params.status == null){
            return Promise.reject("need status for update status user")
        }
        if(params.uid == null){
            return Promise.reject("nee uid for update status user")
        }
        return UserBase.updateUser(params.uid,params.status).then(updated=>{
            if(updated){
                return Promise.resolve("status user has been updated")
            }else{
                return Promise.reject("update user status failed")
            }
        })
    },

    updateUser: function(params){
        if(params.uid == null){
            return Promise.reject("need params uid for update user")
        }

        user_attribute.email = params.email;
        user_attribute.first_name = params.first_name;
        user_attribute.last_name = params.last_name;
        user_attribute.avatar = params.avatar;
        user_attribute.gender = params.gender;
        user_attribute.birthdate = params.birthdate;
        user_attribute.phone = params.phone;
        user_attribute.password = params.password;
        
        return UserAttributeBase.updateUserAttribute(params.uid,user_attribute).then( updated =>{
            if(updated){
                return UserAttributeBase.getUserAttribute({uid:params.uid}).then( user =>{
                    if(user){
                        return Promise.resolve(user);
                    }else{
                        return Promise.reject("update success, but cant get user")
                    }
                })
            }else{
                return Promise.reject("user cant be update")
            }
        })
    },

    updateUserByField: function(params){
        if(params.uid == null){
            return Promise.reject("need params uid for update user")
        }

        return UserAttributeBase.updateUserAttribute(params.uid,params).then( updated =>{
            if(updated){
                return UserAttributeBase.getUserAttribute({uid:params.uid}).then( user =>{
                    if(user){
                        return Promise.resolve(user);
                    }else{
                        return Promise.reject("update success, but cant get user")
                    }
                })
            }else{
                return Promise.reject("user cant be update")
            }
        })
    }
}

module.exports = UpdateUser;