db.voos.aggregate([{ $match: { natureza: "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" } }, { $out: "resumoVoos" }]);
db.resumoVoos.find({}).count();
