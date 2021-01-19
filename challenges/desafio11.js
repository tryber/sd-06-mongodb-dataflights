db .voos.find({ "aeroportoDestino.pais": { $neq: "ESTADOS UNIDOS" }).count();
