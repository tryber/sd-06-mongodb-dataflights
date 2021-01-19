db.voos.findOne(
  { litrosCombustivel: { $lte: 600, $exists: true }, "empresa.nome": { $nin: ["AZUL", "GOL"] } }, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
