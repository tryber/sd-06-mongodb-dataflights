const myQuery = db.voos.find({
  $and: [
    { "empresa.nome": "PASSAREDO" },
    { natureza: "Doméstica" },
  ],
}).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: myQuery });

db.resumoVoos.find();
