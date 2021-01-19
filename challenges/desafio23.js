db.voos.findOne({
  litrosCombustivel: {
    $exists: true,
    $not: { $gt: 1000 },
  },
}, { vooId: true, litrosCombustivel: true, _id: 0 });
