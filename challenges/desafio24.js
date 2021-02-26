db.voos.find({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { $nor: [
      { "empresa.nome": { $regex: /GOL/ } },
      { "empresa.nome": { $regex: /AZUL/ } },
    ] }
  ] },
{
  vooId: true,
  "empresa.nome": true,
  litrosCombustível: true,
  _id: false,
}).limit(1);
