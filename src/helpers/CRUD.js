"use strict"

var CRUD = {
    create: function(model, data){ return model.create(data); },
    update: function(model, pk, data){ return model.update(data,{ where:pk }); },
    delete: function(model, pk){ return model.destroy({ where: pk }); },
    list: function(model, offset, limit, orderBy, sort, where = {}, include = null){
        var subModel = [];
        if(include != null){
            subModel.push(include);
        }
        return model.findAll({
            order: [[orderBy, sort]],
            limit: limit,
            offset: offset,
            where:where,
            include:subModel
        });
    },
    get: function(model,where={}){
        return model.findOne({
            where:where
        });
    }

}

module.exports = CRUD;