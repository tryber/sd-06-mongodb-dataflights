const nVoos = db.voos.find({ $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }] }).count();
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: nVoos,
});
db.resumoVoos.find({});
