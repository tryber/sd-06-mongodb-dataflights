db.resumevoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: 20026,
});

db.resumevoos.findOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
  },
  {
    _id: 0,
  },
);
