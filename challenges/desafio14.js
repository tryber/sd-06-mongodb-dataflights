db.voos.find({ "aeroportoOrige.pais": { $ne: "BRASIL" } }).count();
