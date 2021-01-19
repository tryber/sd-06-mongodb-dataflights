db.voos.find({ "aeroportoDestino.continente": { $or: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
