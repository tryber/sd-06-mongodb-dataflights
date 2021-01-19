const COUNTRIES = ["BRASIL", "ARGENTINA", "CHILE"];
db.voos.find({ "aeroportoDestino.pais": { $in: COUNTRIES } }).count();
