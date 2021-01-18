db.voos.find({ $and: [{ "aeroportoDestino.continente": { $nin: ["EUROPA", "ASIA", "OCEANIA"] } }, { "aeroportoDestino.continente": { $exists: true } }] }).count();
