db.voos.findOne(
    { litrosCombustivel: { $lt: 1000, $exists: true } },
    { _id: false, vooId: true, litrosCombustivel: true },
  );
