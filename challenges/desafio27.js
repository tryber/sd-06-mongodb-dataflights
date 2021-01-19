db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();

db.resumoVoos.insert({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 });
