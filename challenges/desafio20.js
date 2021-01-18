db.voos.findOne({ rtk: { $not:  { $exists: 1 } } }, { _id: 0, vooId: 1 });
