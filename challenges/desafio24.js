db.voos.find({$and: [
  {"litrosCombustivel": {$lt: 601}},
  {"litrosCombustivel": {$exists: true}},
  {"empresa.nome": {$not: {$regex: /GOL/}}},
  {"empresa.nome": {$not: {$regex: /AZUL/}}}
]},
  {"vooId": true, "empresa.nome": true, "litrosCombustível": true, _id: false}
);
