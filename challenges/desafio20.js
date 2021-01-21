// para retornar 1, posso usar o .findOne({}) tbm
db.voos.find({ rtk: { $exists: false } }, { vooId: true, _id: false }).limit(1);
