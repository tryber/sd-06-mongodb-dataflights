const nVoos = db.voos.find({ $and: [{ "empresa.nome": "LATAM AIRLINES BRASIL" }, { natureza: "Doméstica" }] }).count();
db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: nVoos,
});
db.resumoVoos.find({});
