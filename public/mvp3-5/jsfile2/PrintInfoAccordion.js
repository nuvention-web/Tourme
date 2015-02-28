function PrintInfoAccordion(CatList,Category0,map,num){
    var tmpCheckName;
    var tmpDivName;
    var SwitchCounter=0;
    var tmpObject = Category0;
    // console.log(Category0.catname);
    tmpCheckName = "cc";
    tmpDivName = "c";
    $('#title1').text(Category0.catname);
    NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
    $('#headingOne').show();

    for(i=0 ; i<5 ; i++){
      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
      // var wraperstart = "<div class='wraper'>";
      // var wraperend= "</div>";
      // var placeinfofinal = wraperstart+ placeinfonew + placeinfonew2 + wraperend;
      var placeinfofinal =  placeinfonew + placeinfonew2 ;
      $("#c"+i).html(placeinfofinal);
    }
    var counter = 1;
    for (var j=0 ; j<10 ; j++) {
      tmpObject = CatList[j];
      console.log(counter);
       console.log(num);
      if(counter == num){
        break;
      }
      if(tmpObject.categories != Category0.categories){
        switch (SwitchCounter) {
              case 0:
                $('#headingTwo').show();
                 tmpCheckName ="dc";
                 tmpDivName = "d";
                 $('#title2').text(tmpObject.catname);
                 NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                  for(i=0 ; i<5 ; i++){
                    var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                    var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                    var placeinfofinal =  placeinfonew + placeinfonew2;
                    $("#d"+i).html(placeinfofinal);
                  }
                  counter++;
              break;

              case 1:
                $('#headingThree').show();
                tmpCheckName = "ec";
                tmpDivName = "e";
                $('#title3').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                // console.log(tmpObject);
                  for(i=0 ; i<5 ; i++){
                    var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                    var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                    var placeinfofinal =  placeinfonew + placeinfonew2;
                    $("#e"+i).html(placeinfofinal);
                  }
                  counter++;
              break;

              case 2:
                $('#headingFour').show();
                tmpCheckName = "fc";
                tmpDivName = "f";
                $('#title4').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#f"+i).html(placeinfofinal);
                    }
                    counter++;
              break;

              case 3:
                $('#headingFive').show();
                tmpCheckName = "gc";
                tmpDivName = "g";
                $('#title5').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#g"+i).html(placeinfofinal);
                    }
                    counter++;
              break;

              case 4:
                $('#headingSix').show();
                tmpCheckName = "hc";
                tmpDivName = "h";
                $('#title6').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#h"+i).html(placeinfofinal);
                    }
                    counter++;
              break;
              case 5:
                $('#headingSeven').show();
                tmpCheckName = "ic";
                tmpDivName = "i";
                $('#title7').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#i"+i).html(placeinfofinal);
                    }
                    counter++;
              break;
              case 6:
                $('#headingEight').show();
                tmpCheckName = "jc";
                tmpDivName = "j";
                $('#title8').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#j"+i).html(placeinfofinal);
                    }
                    counter++;
              break;



        }
        SwitchCounter++;
     }
   }
   document.getElementById("cc0").checked = true;
   document.getElementById("dc0").checked = true;
   document.getElementById("ec0").checked = true;
   document.getElementById("fc0").checked = true;
   document.getElementById("gc0").checked = true;
   document.getElementById("hc0").checked = true;
   document.getElementById("ic0").checked = true;
   document.getElementById("jc0").checked = true;

};
