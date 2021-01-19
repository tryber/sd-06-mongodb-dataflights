db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $ne: "GOL" } },
    { "empresa.nome": { $ne: "AZUL" } },
    { litrosCombustivel: { $exists: true } },
  ],
}, { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 });
