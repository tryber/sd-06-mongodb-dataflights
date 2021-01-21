db.voos.find({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } }).count();
// db.voos.find({
//   "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" },
// }).count();
