db.voos.find({ "aeroportoDestino.continente": { $nin: ["ÁSIA", "EUROPA", "OCEANIA"] } }).count();
