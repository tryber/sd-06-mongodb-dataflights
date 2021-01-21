db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: 4187,
});

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
);