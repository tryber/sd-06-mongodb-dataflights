db.voos.find({ "aeroportoDestino.pais": { $exists: true, $nin: ["ESTADOS UNIDOS"] } }).count();
