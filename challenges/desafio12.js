db.voos.find({ "aeroportoDestino.pais": { $in: ["BRASIL", "CHILE", "ARGENTINA"] } }).count();
