// db.voos.findOne(
//   { $or: [
//     { "empresa.nome": "DELTA AIRLINES" }, { "empresa.nome": "AMERICAN AIRLINES" }
//   ], "aeroporto.origem": "SBGR", "aeroporto.destino": "KJFK" 
// }, 
// { vooId: true, _id: false }
// );
db.voos.findOne({
  $and: [
    {
      // PRIMEIRO E
      $or: [
        { "empresa.nome": "DELTA AIRLINES" },
        { "empresa.nome": "AMERICAN AIRLINES" },
      ],
    },
    // SEGUNDO E
    { "aeroportoOrigem.sigla": "SBGR" },
    // TERCEIRO E
    { "aeroportoDestino.sigla": "KJFK" },
  ],
}, { _id: 0, vooId: 1 });
