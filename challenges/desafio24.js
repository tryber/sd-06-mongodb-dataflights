db.voos.find(
  { $and:
    [
      { litrosCombustivel: { $lte: 600 } },
      { litrosCombustivel: { $exists: true } },
      { empresa: { $ne: "GOL" } },
      { empresa: { $ne: "AZUL" } },
    ] },
  { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false },
)
  .limit(1);
