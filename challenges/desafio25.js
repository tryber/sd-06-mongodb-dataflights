db.voos.count({ litrosCombustivel: { $lt: 400 }, "empresa.nome": "AZUL" });

db.voos.deleteMany({ litrosCombustivel: { $lt: 400 }, "empresa.nome": "AZUL" });
