"use strict";

const ApiService = require("moleculer-web");
const { ServiceBroker } = require("moleculer");
const serviceConf = require('../config/service.config');

const broker = new ServiceBroker({
    namespace: "dev",
    nodeID: "server-api",
    transporter: serviceConf.getTransporter(),
    logger: serviceConf.getLoger(),
    logLevel: serviceConf.getLogLevel(),
    logFormatter: serviceConf.getLogFormatter(),
	requestTimeout: serviceConf.getRequestTimeout(),
    cacher: serviceConf.getCacher(),
    //middlewares: [serviceMiddleware]
});


broker.createService({
	mixins: [ApiService],

    settings: {
		port: process.env.PORT || 3000,
		name: "api",
		routes: [{
			path: "/users",
			// whitelist: [
			// 	// Access to any actions in all services
			// 	"*"
			// ],
			aliases: {
				"GET user":"users.list",
				"POST create_user" : "users.createUser",
				"GET get_user" : "users.getUser",
				"GET get_user_list" : "users.getUserList",
				"POST update_user" : "users.updateUser",
				"GET delete_user" : "users.deleteUser"
			}
		}],

		assets:{
			folder:"public"
		}

	}
});

broker.start();

