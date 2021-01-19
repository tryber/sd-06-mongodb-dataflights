db.voos.findOne({
  $and: [
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
  ] }, { vooId: 1, _id: 0 });
