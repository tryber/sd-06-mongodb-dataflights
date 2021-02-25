db.voos.findOne({
  $and: [{"litrosCombustivel": {$lt: 1001}}, {"litrosCombustivel": {$exists: true}}]
},
  {"vooId": true, _id: false, "litrosCombustivel": true}
);
