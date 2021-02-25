db.voos.find({ vooId: 756807 },
  {
    passageiros: 1,
    _id: 0,
    "empresa.sigla": 1,
    "empresa.nome": 1,
  });
