db.voos.findOne(
  { litrosCombustivel: { $lt: 600, $exists: true }, "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true },
);
