db.voos.count(
  { $ne: [{ "aeroportoDestino.pais": "ESTADOS UNIDOS" },
  ] },
);
