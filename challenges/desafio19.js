db.voos.find({ litrosCombustivel: { $gte: 0 } }, { _id: 0, vooId: 1 }).limit(1);
