try {
  db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] });
} catch (e) {
  print(e);
}
