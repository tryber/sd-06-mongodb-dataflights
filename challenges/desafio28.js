db.resumoVoos.insertMany([
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.count({
      natureza: "Doméstica",
      "empresa.nome": "LATAM AIRLINES BRASIL",
    }),
  },
]);

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 });
