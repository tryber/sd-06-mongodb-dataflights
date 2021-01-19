db.voos.findOne({
  litrosCombustivel: {
    $exists: true,
    $not: { $gt: 600 },
  },
  "empresa.nome": {
    $not: {
      $in: ["GOL", "AZUL"] },
  } }, { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: 0 });
