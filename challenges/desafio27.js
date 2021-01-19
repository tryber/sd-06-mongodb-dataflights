db.resumoVoos.insertMany(
  [{
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.count({
      natureza: "Doméstica",
      "empresa.nome": "PASSAREDO",
    }),
  }],
);

db.resumoVoos.findOne({}, { _id: 0 });
