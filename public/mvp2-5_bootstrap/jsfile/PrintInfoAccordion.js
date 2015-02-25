function PrintInfoAccordion(CatList,Category0,map){
    var tmpCheckName;
    var tmpDivName;
    var SwitchCounter=0;
    var tmpObject = Category0;

    tmpCheckName = "cc";
    tmpDivName = "c";
    $('#title1').text(Category0.categories);
    NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);

    for(i=0 ; i<5 ; i++){
      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
      // var wraperstart = "<div class='wraper'>";
      // var wraperend= "</div>";
      // var placeinfofinal = wraperstart+ placeinfonew + placeinfonew2 + wraperend;
      var placeinfofinal =  placeinfonew + placeinfonew2 ;
      $("#c"+i).html(placeinfofinal);
    }

    for (var j=0 ; j<CatList.length ; j++) {
      tmpObject = CatList[j];
      // console.log(j);
      // console.log(tmpObject);
      if(tmpObject.categories != Category0.categories){
        switch (SwitchCounter) {
              case 0:
                tmpCheckName ="dc";
                 tmpDivName = "d";
                 $('#title2').text(tmpObject.categories);
                 NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                  for(i=0 ; i<5 ; i++){
                    var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                    var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                    var placeinfofinal =  placeinfonew + placeinfonew2;
                    $("#d"+i).html(placeinfofinal);
                  }
              break;

              case 1:
                tmpCheckName = "ec";
                tmpDivName = "e";
                $('#title3').text(tmpObject.categories);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                // console.log(tmpObject);
                  for(i=0 ; i<5 ; i++){
                    var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                    var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                    var placeinfofinal =  placeinfonew + placeinfonew2;
                    $("#e"+i).html(placeinfofinal);
                  }
              break;

              case 2:
                tmpCheckName = "fc";
                tmpDivName = "f";
                $('#title4').text(tmpObject.categories);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#f"+i).html(placeinfofinal);
                    }
              break;

        }
        SwitchCounter++;
     }
   }
   document.getElementById("cc0").checked = true;
   document.getElementById("dc0").checked = true;
   document.getElementById("ec0").checked = true;
   document.getElementById("fc0").checked = true;

};
