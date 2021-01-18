db.voos.findOne(
  { $and: [{ "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
    { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }] },
  { _id: 0, vooId: 1 },
);
