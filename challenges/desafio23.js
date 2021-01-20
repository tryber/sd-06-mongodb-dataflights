db.voos.find({ $and: 
  [
    { litrosCombustivel: { $lte: 1000 } },
    { litrosCombustivel: { $exists: true } }
  ] },
  { vooId: true, litrosCombustivel: true, _id: false })
  .limit(1);
