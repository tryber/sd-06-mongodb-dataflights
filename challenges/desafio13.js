db.voos.find({ "aeroportoDestino.pais": { $ne: { $in: ["BRASIL", "ARGENTINA", "CHILE"] } } }).pretty();
