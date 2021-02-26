db.voos.find({ "aeroportoDestino.pais": { $not: { $regex: /ESTADOS UNIDOS/ } } }).count();
