db.voos.removeMany({
  $and: [
    { "empresa.nome": "AZUL" },
    { litrosCombustivel: { $lt: 400 } },
  ],
});
