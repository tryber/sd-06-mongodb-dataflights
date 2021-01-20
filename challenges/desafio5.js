db.voo.find({ }, vooId:{  $exists:true} ).skip(9).limit(3);
