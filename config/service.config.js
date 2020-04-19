"use strict";


module.exports = {

    /**
     * Transporter is an important module if you are running services on multiple nodes. 
     * Transporter communicates with other nodes. 
     * It transfers events, calls requests and processes responses ...etc. 
     * If a service runs on multiple instances on different nodes, the requests will be load-balanced among live nodes.
     * Available transporter:
     * TCP, NATS, Redis, MQTT, AMQP, Kafka,...
     * 127.0.0.1:6379
     */
    getTransporter: function(){
        return "redis://127.0.0.1:6379";
    },

    /**
     * The Moleculer has a built-in console logger. It is the default logger.
     * the `true` is same as `console`
     */
    getLoger: function(){
        return console;
    },

    /**
     * Log level can be changed with logLevel option in broker options. Use it with built-in console logger only.
     * Available log levels: fatal, error, warn, info, debug, trace
     */
    getLogLevel: function(){
        return "info";
    },

    /**
     * There are some built-in log formatter.
     * default : [2018-06-26T13:36:05.761Z] INFO node-100/BROKER: Message
     * simple : INFO - Message
     * short : [13:36:30.968Z] INFO BROKER: Message
     */
    getLogFormatter: function(){
        return "simple";
    },

    /**
     * Number of milliseconds to wait before reject a request with a RequestTimeout error. Disabled: 0
     */
    getRequestTimeout: function(){
        return 10000;
    },

    /**
     * Moleculer has a built-in caching solution to cache responses of service actions. 
     * To enable it, set a cacher type in broker option and set the cache: true in action definition what you want to cache.
     * Available cacher :
     * Memory : MemoryCacher is a built-in memory cache module. It stores entries in the heap memory. 
     * Redis : RedisCacher is a built-in Redis based distributed cache module. It uses ioredis library. 
     * MemoryLRU : LRU memory cacher is a built-in LRU cache module. It deletes the least-recently-used items.
     */
    getCacher: function(){
        return "Memory";
    }

}
