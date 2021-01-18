db.voos.find({ vooId: { $exists: true } }).count();
