db.voos.delete({
  $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $gte: 5, $lte: 10 } },
  ],
}).count();
