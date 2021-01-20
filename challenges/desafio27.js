const myQuery = db.voos.find({
  $and: [
    { "empresa.nome": "PASSAREDO" },
    { natureza: "Doméstica" },
  ],
}).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: myQuery });

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
