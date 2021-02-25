db.voos.find({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $not: { $regex: /GOL/ } } },
    { "empresa.nome": { $not: { $regex: /AZUL/ } } },
  ] },
{
  vooId: true,
  "empresa.nome": true,
  litrosCombustível: true,
  _id: false,
});
