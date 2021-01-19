db.voos.find({
  $and: [
    { litrosCombustivel: { $lte: 600 } },
    { litrosCombustivel: { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: true } },
  ],
}, {
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
  _id: 0,
}).limit(1);
