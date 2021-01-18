db.voos.find({ rpk: { $exists: false } }, { vooId: true, _id: false }).limit(1);
