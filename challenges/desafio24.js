db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lte: 600 } },
    { litrosCombustivel: { $exists: 1 } },
    { $nor: [
      { "empresa.nome": "AZUL" },
      { "empresa.nome": "GOL" },
    ] },
  ],
},
{ vooId: 1, _id: 0, "empresa.nome": 1, litrosCombustivel: 1 });
