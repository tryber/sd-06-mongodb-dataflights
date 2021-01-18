db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.find(
    {
      $and: [
        { "empresa.nome": "LATAM AIRLINES BRASIL" },
        { natureza: { $eq: "Doméstica" } },
      ],
    },
  ).count(),
});

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
