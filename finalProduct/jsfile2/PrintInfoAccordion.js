function PrintInfoAccordion(CatList,Category0,map,num){
    var tmpCheckName;
    var tmpDivName;
    var SwitchCounter=0;
    var tmpObject = Category0;
    var infoc = [];
    var infod = [];
    var infoe = [];
    var infof = [];
    var infog = [];
    var infoh = [];
    var infoi = [];
    var infoj = [];

    // console.log(Category0.catname);
    tmpCheckName = "cc";
    tmpDivName = "c";
    $('#title1').text(Category0.catname);
    NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
    $('#headingOne').show();

    for(i=0 ; i<5 ; i++){
      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";

      var placeinfofinal =  placeinfonew + placeinfonew2 ;
      $("#c"+i).html(placeinfofinal);

      var MyItineraryInfo ='<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' +  tmpObject.list[i].name + '</b><br>'+ tmpObject.list[i].address + ""

      var InfoDetailc = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div  id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
      // console.log(tmpObject.list[i].name);
      if(tmpObject.list[i].name =="The Field Museum"){

        InfoDetailc = InfoDetailc + "<div id ='comment'> "  +  '<IMG BORDER="0" ALIGN="Left" width = "45" height = "45" SRC="https://irs3.4sqi.net/img/user/64x64/YVSYMY3QFQKZKHCI.jpg">'   +   "  Be sure to smile at SUE, the largest and most complete T.rex fossil ever discovered. (She'll smile back at you with 58 teeth!) </div>" + '<br>' +"<div id ='comment2'> "  +  '<IMG BORDER="0" ALIGN="Left" width = "45" height = "45" SRC="https://irs0.4sqi.net/img/user/64x64/C0H2MKTB1VK0JK10.jpg">'   +   " Leave yourself plenty of time to go here because there is so much cool stuff. Don't miss the evolution exhibit, the dinosaurs were so interesting. And thr giant sloth! </div>";
      }

      infoc.push(InfoDetailc);


      $("#MyItineraryc"+i).html(MyItineraryInfo);

    }
    document.getElementById("cc0").checked = true;

    var counter = 1;
    for (var j=0 ; j<10 ; j++) {
      tmpObject = CatList[j];

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
                    var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                    var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                    var placeinfofinal =  placeinfonew + placeinfonew2;
                    $("#d"+i).html(placeinfofinal);

                    var InfoDetaild = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                    infod.push(InfoDetaild);
                    //console.log(infod);

                    var MyItineraryInfo = '<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' + tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                    $("#MyItineraryd"+i).html(MyItineraryInfo);
                  }

                  counter++;
                  document.getElementById("dc0").checked = true;
              break;

              case 1:
                $('#headingThree').show();
                tmpCheckName = "ec";
                tmpDivName = "e";
                $('#title3').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                // console.log(tmpObject);
                  for(i=0 ; i<5 ; i++){
                    var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                    var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                    var placeinfofinal =  placeinfonew + placeinfonew2;
                    $("#e"+i).html(placeinfofinal);

                    var InfoDetaile = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                    infoe.push(InfoDetaile);
                    // console.log(infoe);

                    var MyItineraryInfo = '<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' + tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                    $("#MyItinerarye"+i).html(MyItineraryInfo);
                  }

                  counter++;
                  document.getElementById("ec0").checked = true;
              break;

              case 2:
                $('#headingFour').show();
                tmpCheckName = "fc";
                tmpDivName = "f";
                $('#title4').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#f"+i).html(placeinfofinal);

                      var InfoDetailf = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                      infof.push(InfoDetailf);

                      var MyItineraryInfo ='<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' + tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                      $("#MyItineraryf"+i).html(MyItineraryInfo);

                    }

                    counter++;
                    document.getElementById("fc0").checked = true;
              break;

              case 3:
                $('#headingFive').show();
                tmpCheckName = "gc";
                tmpDivName = "g";
                $('#title5').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#g"+i).html(placeinfofinal);

                      var InfoDetailg = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                      infog.push(InfoDetailg);

                      var MyItineraryInfo ='<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' + tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                      $("#MyItineraryg"+i).html(MyItineraryInfo);

                    }

                    counter++;
                    document.getElementById("gc0").checked = true;
              break;

              case 4:
                $('#headingSix').show();
                tmpCheckName = "hc";
                tmpDivName = "h";
                $('#title6').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#h"+i).html(placeinfofinal);

                      var InfoDetailh = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                      infoh.push(InfoDetailh);

                      var MyItineraryInfo ='<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' + tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                      $("#MyItineraryh"+i).html(MyItineraryInfo);

                    }

                    counter++;
                    document.getElementById("hc0").checked = true;
              break;
              case 5:
                $('#headingSeven').show();
                tmpCheckName = "ic";
                tmpDivName = "i";
                $('#title7').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#i"+i).html(placeinfofinal);

                      var InfoDetaili = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                      infoi.push(InfoDetailf);

                      var MyItineraryInfo ='<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' +  tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                      $("#MyItineraryi"+i).html(MyItineraryInfo);
                    }

                    counter++;
                    document.getElementById("ic0").checked = true;
              break;
              case 6:
                $('#headingEight').show();
                tmpCheckName = "jc";
                tmpDivName = "j";
                $('#title8').text(tmpObject.catname);
                NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName);
                  // console.log(tmpObject);
                    for(i=0 ; i<5 ; i++){
                      var placeinfonew = '<IMG BORDER="0" ALIGN="Left" width = "100" height = "100" SRC="'+ tmpObject.list[i].photourl +'">'+tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
                      var placeinfonew2 =  "<div class='ratingdiv' style='height:40px; width:40px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
                      var placeinfofinal =  placeinfonew + placeinfonew2;
                      $("#j"+i).html(placeinfofinal);

                      var InfoDetailj = '<IMG BORDER="0" ALIGN="Left" width = "350" height ="350" SRC="'+ tmpObject.list[i].photourl +'"><h1>'+tmpObject.list[i].name +"</h1></br><h4>" + tmpObject.list[i].address +"</h4></br><h4>"+ tmpObject.list[i].phone + "</h4><div id = 'closeInfo'><h3><b>Close</b></h3></div></br>";
                      infoj.push(InfoDetailj);

                      var MyItineraryInfo ='<IMG BORDER="0" ALIGN="Left" width = "70" height ="100%" SRC="'+ tmpObject.list[i].photourl +'"><b>' + tmpObject.list[i].name + '</b><br>' + tmpObject.list[i].address + ""
                      $("#MyItineraryj"+i).html(MyItineraryInfo);

                    }

                    counter++;
                   document.getElementById("jc0").checked = true;
              break;

        }
        SwitchCounter++;
     }
   }
// document.getElementById("cc0").checked = true;
// document.getElementById("dc0").checked = true;
// document.getElementById("ec0").checked = true;
// document.getElementById("fc0").checked = true;
// document.getElementById("gc0").checked = true;
// document.getElementById("hc0").checked = true;
// document.getElementById("ic0").checked = true;
// document.getElementById("jc0").checked = true;

PrintItinerary();
InfoDetailPanel(infoc,infod,infoe,infof,infog,infoh,infoi,infoj);
};
