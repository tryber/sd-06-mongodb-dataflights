// db.voos.find({natureza: "Internacional",}).count();
db.voos.find({ natureza: { $eq: "Internacional" } }).count();
