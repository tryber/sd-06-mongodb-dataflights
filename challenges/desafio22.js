db.voos.findOne({ $and: [{ "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "KJFK" }] }, { _id: 0, vooId: 1 });
