const AIRLINE_EXCLUDE = ["GOL", "AZUL"];
db.voos.findOne({
  litrosCombustivel: { $lt: 600, $exists: true },
  "empresa.nome": { $nin: AIRLINE_EXCLUDE },
}, {
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
});
