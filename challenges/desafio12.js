db.voos.find({ "aeroportoDestino.pais": { $or: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
