// db.voos.findOne(
//   { $and: [
//     { litrosCombustivel: { $lte: 600 } },
//     { $or: [
//       { "empresa.nome": { $ne: "GOL" } },
//       { "empresa.nome": { $ne: "AZUL" } },
//     ] },
//   ] },
//   { vooId: true, _id: false, "empresa.nome": true, litrosCombustivel: true },
// );
db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $ne: "GOL" } },
    { "empresa.nome": { $ne: "AZUL" } },
  ] },
  { vooId: true, _id: false, "empresa.nome": true, litrosCombustivel: true },
);
