db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $nin: ["AZUL", "GOL"] } },
    { litrosCombustivel: { $exists: 1 } },
  ] }, { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 });
