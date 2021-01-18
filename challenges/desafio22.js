db.voos.find({ $or: [{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }, { "empresa.sigla": { $in: ["SBGR", "KJFK"] } }] }, { _id: 0, vooId: 1 }).limit(1);
