db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({ $and: [
    { "empresa.nome": "PASSAREDO" },
    { natureza: "Doméstica" },
  ] }).count(),
});

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 }).limit(1);
