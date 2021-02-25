db.voos.find({$or: [{ "aeroportoDestino.continente": {$not: {$regex: /EUROPA/}}},
{"aeroportoDestino.continente": {$not: {$regex: /ÁSIA/}}},
{"aeroportoDestino.continente": {$not: {$regex: /OCEANIA/}}}]});
