db.voos.find({
  $and: [{ "aeroportoDestino.continente": { $not: { $regex: /EUROPA/ } } },
    { "aeroportoDestino.continente": { $not: { $regex: /ÁSIA/ } } },
    { "aeroportoDestino.continente": { $not: { $regex: /OCEANIA/ } } }] }).count();
