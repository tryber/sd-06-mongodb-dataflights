db.voos.find({ $and: [{ "empresa.nome": "AZUL" }, { quantity: { $lt: 400 } }] }).count();
