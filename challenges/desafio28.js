const RESUMO_VOOS = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "LATAM AIRLINES BRASIL",
}).count();
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: RESUMO_VOOS });
db.resumoVoos.find({ }, { _id: 0 });
