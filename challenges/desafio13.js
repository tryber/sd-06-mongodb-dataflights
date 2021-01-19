db.voos.find({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
{ $nor: [ {a: 1}, {b: 2}, {c: 3} ] } 
