$(window).load(function(){

  $("#button1").click(function(){
    NewhubLat = CatList[0].list[0].lat;
    NewhubLng = CatList[0].list[0].lng;
    // console.log(NewhubLat);
    // console.log(NewhubLng);
    // console.log(CatList[0]);
    SecSearch(NewhubLat,NewhubLng,CatList[0])
  });

  $("#button2").click(function(){
    NewhubLat = CatList[1].list[0].lat;
    NewhubLng = CatList[1].list[0].lng;
    SecSearch(NewhubLat,NewhubLng,CatList[1])
  });

  $("#button3").click(function(){
    NewhubLat = CatList[2].list[0].lat;
    NewhubLng = CatList[2].list[0].lng;
    SecSearch(NewhubLat,NewhubLng,CatList[2])
  });

  $("#button4").click(function(){
    NewhubLat = CatList[3].list[0].lat;
    NewhubLng = CatList[3].list[0].lng;
    SecSearch(NewhubLat,NewhubLng,CatList[3])
  });

});
