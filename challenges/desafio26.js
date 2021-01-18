db.voos.deleteMany(
  {
    "empresa.nome": "GOL",
    $and: [
      {
        "passageiros.pagos": { $not: { $lt: 5 } },
      },
      {
        "passageiros.pagos": { $gte: 5 },
      },
      {
        "passageiros.pagos": { $not: { $gt: 10 } },
      },
      {
        "passageiros.pagos": { $lte: 10 },
      },
    ],
  },
);
