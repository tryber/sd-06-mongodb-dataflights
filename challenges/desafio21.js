db.voos.findOne({ litrosCombustivel: { $gt: 1000 } }, { vooId: 1, _id: 0 }).limit(1);
