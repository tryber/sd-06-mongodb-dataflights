db.voos.find({ vooId: { $eq: 756807 } }, { empresa: { sigla: 1, nome: 1 }, passageiros: 1, _id: 0 });
