function TriggerPopPanel(CatList){
  $("#button1").html(CatList[0].categories);
  $("#button2").html(CatList[1].categories);
  $("#button3").html(CatList[2].categories);
  $("#button4").html(CatList[3].categories);
  $('#myModal').modal('toggle');
}
