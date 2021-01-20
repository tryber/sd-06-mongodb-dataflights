const myQuery = db.voos.find(
  { "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" },
).count();

db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: myQuery,
  },
);

db.resumoVoos.find(
  { empresa: "LATAM AIRLINES BRASIL" },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
