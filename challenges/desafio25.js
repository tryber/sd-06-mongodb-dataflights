db.voos.deleteMany(
  {
    litrosCombustivel: { $exists: true, $lt: 400 },
    "empresa.nome": { $ne: "AZUL" },
  },
);
