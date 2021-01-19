db.voos.findOne(
  { $and: [
    { "company.name": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
  ] },
  { _id: false, vooId: true },
);
