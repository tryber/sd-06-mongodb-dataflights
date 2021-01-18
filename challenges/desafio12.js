db.voos.find({ "aeroportoDestino.pais": { $exists: true, $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
