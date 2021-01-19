// db.voos.find({ "empresa.nome": "GOL" , ano: 2017 },
// {
//   vooId: 1,
//   "empresa.nome": 1,
//   "aeroportoOrigem.nome": 1,
//   "aeroportoDestino.nome": 1,
//   mes: 1,
//   ano: 1,
//   _id: 0,
// }).limit(10);
// precisa de um AND para os parametros de busca
db.voos.find(
  {
    $and: [
      { "empresa.nome": "GOL" },
      { ano: 2017 },
    ],
  },
  {
    vooId: true,
    ano: true,
    mes: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    _id: false,
  },
).limit(10);
