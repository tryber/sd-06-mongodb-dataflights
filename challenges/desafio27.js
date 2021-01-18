var myQuery = db.voos.find({
  $and: [
    { "empresa.nome": "PASSAREDO" },
    { natureza: "Doméstica" },
  ],
}).count();

db.resumoVoo1.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: myQuery });
