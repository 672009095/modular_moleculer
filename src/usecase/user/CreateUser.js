'use strict'
const UserAttributeBase = require("../../repository/base/user_attribute.base");
const UserBase = require("../../repository/base/user.base");
var user_attribute = {
    uid:0,
    email:"",
    first_name:"",
    last_name:"",
    avatar:"",
    gender:"U",
    birthdate:"",
    phone:"",
    password:""
}

var CreateUser = {

    crreateUser: function(params){
        return UserBase.createUser().then(user=>{
            if(user){

                user_attribute.uid = user.uid;
                user_attribute.email = params.email;
                user_attribute.first_name = params.first_name;
                user_attribute.last_name = params.last_name;
                user_attribute.avatar = params.avatar;
                user_attribute.gender = params.gender;
                user_attribute.birthdate = params.birthdate;
                user_attribute.phone = params.phone;
                user_attribute.password = params.password;

                return UserAttributeBase.createUserAttribbute(user_attribute).then(created=>{
                    if(created){
                        user.dataValues.attribute = created;
                        return Promise.resolve(user)
                    }else{
                        return Promise.reject('failed create user attribute') 
                    }
                })
            }else{
                return Promise.reject('failed create user')
            }
        })
    }
}

module.exports = CreateUser;