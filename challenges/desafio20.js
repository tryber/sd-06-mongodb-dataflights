db.voos.findOne({ rpk: { $exists: false } }, { _id: 0, vooId: 1 });
