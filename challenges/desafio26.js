db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $and: [{ $gte: 5 }, { $lte: 10 }] } });
