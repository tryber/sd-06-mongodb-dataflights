db.voos.deleteMany({ "empresa.nome": "AZUL", litrosCombustivel: { $lt: 400 } }, { hint: { status: 1 } });
