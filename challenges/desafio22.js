db.voos.find({ $or: [{ empresa: "DELTA AIRLINES" }, { empresa: "AMERICAN AIRLINES" }], "aeroportoOrigem.sigla": "SBGR", "aeroportoDestino.sigla": "KJFK" }, { vooId: true, _id: false }).limit(1);
