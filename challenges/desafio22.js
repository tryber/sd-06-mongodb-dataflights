db.voos.findOne({
  "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  "aeroportoOrigem.sigla": { $eq: "SBGR" },
  "aeroportoDestino.sigla": { $eq: "KJFK" } }, { vooId: true, _id: 0 });
