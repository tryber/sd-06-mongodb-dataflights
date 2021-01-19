db.voos.findOne({ $and: [{ litrosCombustivel: { $lt: 400 } },
  { "empresa.nome": "AZUL" }] });
