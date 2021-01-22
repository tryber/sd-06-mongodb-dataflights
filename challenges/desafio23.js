db.voos.findOne({ $and: [{ litrosCombustivel: { $gt: 100 } },
  { litrosCombustivel: { $exists: true } }] }, { vooId: 1, litrosCombustivel: 1, _id: 0 });
