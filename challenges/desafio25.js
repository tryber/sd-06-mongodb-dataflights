// nao precisa de count para retornar quantos foram removidos
db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] });
