db.voos.find(
  { $and: [{ litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["AZUL", "GOL"] } }] },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
).limit(1).pretty();
