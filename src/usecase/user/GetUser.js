'use strict'
const UserAttributeBase = require("../../repository/base/user_attribute.base");
const UserBase = require("../../repository/base/user.base");
var where = {}    

var GetUser = {

    getUser: function(params){
        if(params.uid != null){
            where['uid'] = params.uid
        }else{
            return Promise.reject("need params uid for get user")
        }
        return UserAttributeBase.getUserAttribute(where).then(user=>{
            if(user){
                return Promise.resolve(user);
            }else{
                return Promise.reject("user not found")
            }
        })
    },
    
    getUserList: function(params){
        if(params.uid !=null){
            where['uid'] = params.uid
        }
        return UserAttributeBase.listUserAttribute(0,10,"uid","DESC",where).then(list=>{
            if(list){
                return Promise.resolve(list)
            }else{
                return Promise.reject("not found data")
            }
        })
    }
}

module.exports = GetUser;