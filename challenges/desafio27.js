
const quant = db.voos.find({ "empresa.nome": { $eq: "PASSAREDO" }, natureza: { $eq: "Doméstica" } }).count();
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: quant });
db.resumoVoos.findOne({ "empresa": "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });

