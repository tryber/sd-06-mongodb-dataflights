db.voos.findOne({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 601 } },
    { "empresa.nome": { $not: { $regex: /GOL/ } } },
    { "empresa.nome": { $not: { $regex: /AZUL/ } } },
  ] },
{
  vooId: true,
  "empresa.nome": true,
  litrosCombustível: true,
  _id: false,
});
