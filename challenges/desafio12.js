db.voos.find({
  $or: [
    { $and: [{ "aeroportoDestino.pais": "BRASIL" }, { "aeroportoDestino.pais": "ARGENTINA" }] },
    { "aeroportoDestino.pais": "CHILE" },
  ],
}).count();
