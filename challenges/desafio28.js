db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.find({ $and: [
    { "empresa.nome": "LATAM AIRLINES BRASIL" },
    { natureza: "Doméstica" },
  ] }).count(),
});

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0 }).limit(1);
