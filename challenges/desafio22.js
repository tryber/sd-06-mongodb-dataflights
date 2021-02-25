db.voos.findOne(
  {
    $and: [
      {
        $or: [
          { "aeroportoOrigem.sigla": "SBGR" },
          { "aeroportoOrigem.sigla": "KJFK" },
        ],
      },
      {
        $or: [
          { "empresa.nome": "DELTA AIRLINES" },
          { "empresa.nome": "AMERICAN AIRLINES" },
        ] },
    ],
  }, { vooId: true, _id: false },
);
