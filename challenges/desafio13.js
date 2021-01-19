const COUNTRIES = ["EUROPA", "ÁSIA", "OCEANIA"];
db.voos.find({ "aeroportoDestino.continente": { $nin: COUNTRIES } }).count();
