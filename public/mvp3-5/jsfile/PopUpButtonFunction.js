$(window).load(function(){

  function trasmit(lat,lng,num) {
  // window.location.href = "index2.php?lat="+lat+"&"+"lng="+lng+"&"+"cat="+cat;
  window.location.href ="index2.php?lat="+lat+"&"+"lng="+lng+"&"+"num="+num;
}

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
    // console.log(number);
    NewhubLat = CatList[0].list[0].lat;
    NewhubLng = CatList[0].list[0].lng;
    var json = JSON.stringify(CatList[0]);
    sessionStorage.setItem('tmpjson', json);
    trasmit(NewhubLat,NewhubLng,number);
    // alert("test");
    // SecSearch(NewhubLat,NewhubLng,CatList[0])
  });

  $("#button2").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[1].list[0].lat;
    NewhubLng = CatList[1].list[0].lng;
    var json = JSON.stringify(CatList[1]);
    sessionStorage.setItem('tmpjson', json);
    trasmit(NewhubLat,NewhubLng,number);
    // SecSearch(NewhubLat,NewhubLng,CatList[1])
  });

  $("#button3").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[2].list[0].lat;
    NewhubLng = CatList[2].list[0].lng;
    var json = JSON.stringify(CatList[2]);
    sessionStorage.setItem('tmpjson', json);
    trasmit(NewhubLat,NewhubLng,number);
    // SecSearch(NewhubLat,NewhubLng,CatList[2])
  });

  $("#button4").click(function(){
    var number = StringNumber($('input[name=optradio]:checked', '#myForm').val());
    NewhubLat = CatList[3].list[0].lat;
    NewhubLng = CatList[3].list[0].lng;
    var json = JSON.stringify(CatList[3]);
    sessionStorage.setItem('tmpjson', json);
    trasmit(NewhubLat,NewhubLng,number);
    // SecSearch(NewhubLat,NewhubLng,CatList[3])
  });

  $("#button5").click(function(){
    var number = 8;
    NewhubLat = localStorage.getItem("Getlat");
    NewhubLng = localStorage.getItem("Getlng");
    var json = JSON.stringify(CatList[0]);
    sessionStorage.setItem('tmpjson', json);
    trasmit(NewhubLat,NewhubLng,number);
  });

});
