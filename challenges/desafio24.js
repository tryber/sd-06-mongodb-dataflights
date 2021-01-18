db.voos.find({$and: [{litrosCombustivel: {$lte: 600}}, {"empresa.nome": {$nin: ["GOL", 'A']}}]}, {vooId: 1, _id: 0, "empresa.nome": 1, litrosCombustivel: 1}).limit(1);
