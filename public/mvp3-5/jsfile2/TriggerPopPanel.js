function TriggerPopPanel(CatList){
  $("#button1").html(CatList[0].showname);
  $("#button2").html(CatList[1].showname);
  $("#button3").html(CatList[2].showname);
  $("#button4").html(CatList[3].showname);
  $('#myModal').modal('toggle');
}
