db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lte: 1000 } },
    ],
  },
  {
    _id: false,
    vooId: true,
    litrosCombustivel: true,
  },
);
