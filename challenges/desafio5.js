db.voos.find({}, { _id: 0, vooId: 1 }).skip(2).limit(10);
