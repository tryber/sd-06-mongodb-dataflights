const quantidadeVoos = db.voos.count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: quantidadeVoos });
db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
