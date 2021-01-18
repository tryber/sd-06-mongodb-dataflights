db.voos.findOne(
  { $and: [
    { "aeroportoDestino.sigla": "KJFK" },
    { "aeroportoOrigem.sigla": "SBGR" },
    { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
  ],
  },
  { vooId: 1, _id: 0 },
);
