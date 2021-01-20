db.voos.find({ "empresa.nome": "AZUL" }).count();

// outra forma de fazer -> db.voos.count({ "campo": "valor"});
