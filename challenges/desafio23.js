db.voos.findOne({ listrosCombustivel: { $lt: 1000}, { _id: false, vooId: true, litrosCombustivel: true } });
