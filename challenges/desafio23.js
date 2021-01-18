db.voos.findOne({
  $nor: [
    { litrosComustivel: { $gt: 1000 } },
    { litrosCombustivel: { $exists: 0 } },
  ] }, { vooId: 1, litrosCombustivel: 1, _id: 0 });
