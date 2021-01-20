db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.find(
      {
        "empresa.nome": "PASSAREDO",
        natureza: "DOMÉSTICA",
      },
    ),
  },
);

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  },
);
