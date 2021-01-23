db.voos.count({ $or: [{ $nor:
[
  { "aeroportoDestino.continente": "EUROPA" },
  { "aeroportoDestino.continente": "ÁSIA" },
  { "aeroportoDestino.continente": "OCEANIA" },
] }],
});
