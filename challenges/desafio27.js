const RESUMO_VOOS = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
}).count();
db.resumoVoo.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: RESUMO_VOOS });
db.resumoVoo.find({ }, { _id: 0 });
