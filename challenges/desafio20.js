db.voos.find({ rpk: { $exists: false } }, { vooId: 1, _id: 0 }).limit(1);
