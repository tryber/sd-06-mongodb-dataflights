let newerQuery = db.voos.find({ "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" } , natureza: { $eq:"Doméstica"} }).count();
db.resumoVoos.insert({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: newerQuery });
db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0, totalVoosDomesticos: 1, empresa: 1 });