db.voos.find({ "aeroportoDestino.continente": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
