$(window).load(function(){

    function StringNumber(when){
      // console.log(when);
      if(when=="Day"){
        return 5;
      }else if(when =="Morning"){
        return 2;
      }else if(when =="Afternoon"){
        return 3;
      }
    }


  $("#button1").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[0].list[0].lat;
    NewhubLng = CatList[0].list[0].lng;
    RemoveAccordion();
    // alert(number);
    SecSearch(NewhubLat,NewhubLng,CatList[0],number);
  });

  $("#button2").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[1].list[0].lat;
    NewhubLng = CatList[1].list[0].lng;
    RemoveAccordion();
    SecSearch(NewhubLat,NewhubLng,CatList[1],number);
  });

  $("#button3").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[2].list[0].lat;
    NewhubLng = CatList[2].list[0].lng;
    RemoveAccordion();
    SecSearch(NewhubLat,NewhubLng,CatList[2],number);
  });

  $("#button4").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[3].list[0].lat;
    NewhubLng = CatList[3].list[0].lng;
    RemoveAccordion();
    SecSearch(NewhubLat,NewhubLng,CatList[3],number);
  });

  $("#button5").click(function(){
    var number = 8;
    NewhubLat = localStorage.getItem("Getlat");
    NewhubLng = localStorage.getItem("Getlng");
    RemoveAccordion();
    SecSearch(NewhubLat,NewhubLng,CatList[0],number);
  });

});
