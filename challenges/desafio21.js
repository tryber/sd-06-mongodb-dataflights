db.voos.findOne({ litrosCombustivel: { $gt: 999 } }, {
  _id: 0,
  vooId: 1,
});
