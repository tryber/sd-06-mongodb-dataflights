// para retornar 1, posso usar o .findOne({}) tbm
db.voos.find({ litrosCombustivel: { $exists: true } }, { vooId: true, _id: false }).limit(1);
