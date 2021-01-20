db.voos.find({
  $nor: [{ "aeroportoDestino.continente": "EUROPA" }, { "aeroportoDestino.continente": "ASIA" }, { "aeroportoDestino.continente": "OCEANIA" }] }).count();