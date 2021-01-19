const AIRLINE = ["AMERICAN AIRLINES", "DELTA AIRLINES"];
db.voos.findOne({
  "empresa.nome": { $in: AIRLINE },
  "aeroportoOrigem.sigla": "SBGR",
  "aeroportoDestino.sigla": "KJFK",
}, {
  _id: 0,
  vooId: 1,
});
