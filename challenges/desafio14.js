db.voos.find({ "aeroportoOrigem.pais": { $not: { $regex: /BRASIL/ } } }).count();
