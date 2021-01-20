db.voos.find({ ano: { $gte: 2016, $lte: 2017 } }).count();
