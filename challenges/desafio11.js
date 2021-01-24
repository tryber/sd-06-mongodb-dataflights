db.voos.find(
  { $ne: [{ "aeroportoDestino.pais": "ESTADOS UNIDOS" },
  ] },
);
