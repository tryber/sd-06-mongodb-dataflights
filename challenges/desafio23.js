db.voos.findOne(
  {
    litrosCombustivel: { $lte: 1000 },
  }, {
    litrosCombustivel: 1,
    vooId: 1,
    _id: 0,
  },
);
