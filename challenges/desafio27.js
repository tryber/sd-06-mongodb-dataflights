const nVoosPassaredo = db.voos.find({ $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }] }).count();
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: nVoosPassaredo,
});
db.resumoVoos.find({});
