db.voos.find({ and: [{ vooId: { $gte: 10 } }, { vooId: { lte: 12 } }]});
