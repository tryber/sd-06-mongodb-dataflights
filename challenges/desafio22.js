db.voos.find({
  $or:
  [
    { "empresa.nome": "DELTA AIRLINES" },
    { "empresa.nome": "AMERICAN AIRLINES" },
  ],
  "aeroportoOrigem.sigla": "SBGR",
  "aeroportoDestino.sigla": "KJFK" },
{ vooId: true, _id: false }).limit(1);
