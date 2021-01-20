db.voos.findOne({$or: [{"empresa.nome": "DELTA AIRLINES"}, {"empresa.nome": "AMERICAN AIRLINES"}], "aeroporto.origem": "SBGR", "aeroporto.destino": "KJFK" }, {vooId: true, _id: false});
