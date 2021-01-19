db.voos.find(
  { "empresa.nome": "GOL",
    ano: { $eq: 2017 },
  },
  { vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    mes: true,
    ano: true,
    _id: 0 },
)
  .limit(10);
