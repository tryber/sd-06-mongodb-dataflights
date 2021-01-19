db.voos.find({ "aeroportoDestino.continente": { $ne: { $in: ["EUROPA", "ASIA", "OCEANIA"] } } }).count();
