db.voos.find(
  {
    $and: [
      {
        ano: { $not: { $lt: 2017 } }
      },
      {
        ano: { $not: { $gt: 2018 } }
      }
    ]
  }
).count();
