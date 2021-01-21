db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $gte: 600 } },
    { litrosCombustivel: { $exists: true } },
    { $or: [
      { "empresa.nome": { $ne: "GOL" } },
      { "empresa.nome": { $ne: "AZUL" } },
    ] },
  ] },
  { vooId: true, _id: false, "empresa.nome": true, litrosCombustivel: true },
);
