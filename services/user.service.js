"use strict";

const DbService = require("moleculer-db");
const { ServiceBroker } = require("moleculer");
const { MoleculerClientError } = require("moleculer").Errors;
const serviceConf = require('../config/service.config');

const CreateUser = require("../src/usecase/user/CreateUser");
const GetUser = require("../src/usecase/user/GetUser");
const UpdateUser = require("../src/usecase/user/UpdateUser");
const DeleteUser = require("../src/usecase/user/DeleteUser");

const broker = new ServiceBroker({
    namespace: "dev",
    nodeID: "server-user",
    transporter: serviceConf.getTransporter(),
    logger: serviceConf.getLoger(),
    logLevel: serviceConf.getLogLevel(),
    logFormatter: serviceConf.getLogFormatter(),
	requestTimeout: serviceConf.getRequestTimeout(),
	cacher: serviceConf.getCacher(),
	requestTimeout: 10 * 1000, // in milliseconds
});

broker.createService({
    name: "users",
    actions:{
        list(){
            return "test"
        },
        createUser(ctx){
            return CreateUser.crreateUser(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        },
        getUser(ctx){
            return GetUser.getUser(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        },
        getUserList(ctx){
            return GetUser.getUserList(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        },
        updateUser(ctx){
            return UpdateUser.updateUser(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        },
        updateUserStatus(ctx){
            return UpdateUser.updateUserStatus(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        },
        updateUserUsername(ctx){
            return UpdateUser.updateUserByField(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        },
        deleteUser(ctx){
            return DeleteUser.deleteUser(ctx.params).then(to=>{
                if(!to){
                    return this.wrapperFail(to)
                }
                return this.wrapperSuccess(to)
            })
        }
    },

    methods:{
        wrapperSuccess(data) {
            var body = {
                code : 2000,
                message : "success",
                data: data
            }
            return Promise.resolve(body);
        },

        wrapperFail(data) {
            var body = {
                code : 2001,
                message : data
            }
            return Promise.resolve(body);
        }

    }
});

broker.start();
