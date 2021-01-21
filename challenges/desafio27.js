
const quant = db.voos.find({ "empresa.nome": { $eq: "PASSAREDO" }, natureza: { $eq: "Doméstica" } }).count();
print(quant);
db.resumoVoos.insertOne({ empresa: "PASSAREDO" , totalVoosDomesticos: quant });
db.resumoVoos.find({ "empresa": "PASSAREDO" }, { _id: 0 });

