db.voos.find({ "aeroportoDestino.continente": { $not: { $eq: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } } });
