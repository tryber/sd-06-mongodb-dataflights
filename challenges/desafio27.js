db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });

db.resumoVoos.find({ empresa: "PASSAREDO" }, { empresa: true, totalVoosDomesticos: true, _id: false });
