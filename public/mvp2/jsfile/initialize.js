  function initialize() {

   var getplaceName = document.getElementById('Near').value;

     $.ajax({
         type:"GET",
         url: "https://maps.googleapis.com/maps/api/geocode/xml?address="+ getplaceName +"&key=AIzaSyDBlU3aP3_tALovlxvjetUCran3lsGrVv4",
         dataType:"xml",
         success: ProcessXml
     });

     function ProcessXml(xml){

     var lat = $(xml).find("geometry").find("location").find("lat").text();
     var lng = $(xml).find("geometry").find("location").find("lng").text();

     localStorage.setItem("Getlat", lat);
     localStorage.setItem("Getlng", lng);
     initialize2();
       }


  }


  function initialize2() {
        // ---------clean all content in array-------------------//

        usercollect = [ ];
        collectname = [ ];

        // tmpName = [ ];
        // tmpLoc = [ ];
        PhotoJson= [ ];
        PhotoURL=[ ];
        tmpfPhone = [ ];
        tmpfaddress = [ ];

        MuseumName = [ ];
        MusLoc =[ ];
        Musphone = [ ];
        Musaddress = [];
        Musjson = [ ];
        Musphlinks = [ ];
        Musmarker = [];
        MusRating = [];

        foodName = [ ];
        foodLoc =[ ];
        foodphone = [ ];
        foodaddress = [ ];
        foodjson = [ ];
        foodphlinks = [ ];
        foodmarker = [];
        foodRating = [];

        AEName = [];
        AELoc =[];
        AEphone = [ ];
        AEaddress = [ ];
        AEjson = [ ];
        AElinks = [ ];
        AEmarker = [];
        AERating = [];

        EventsName = [];
        EventsLoc =[];
        Eventsphone = [ ];
        Eventsaddress = [ ];
        Eventsjson = [ ];
        Eventslinks = [ ];
        Eventsmarker = [];
        EventsRating = [];


        ShopName = [];
        ShopLoc =[];
        Shopphone = [ ];
        Shopaddress = [ ];
        Shopjson = [ ];
        Shoplinks = [ ];
        Shopmarker = [];
        ShopRating = [];

      // ---------------------------------------------------------------------//



      // -------------------------------near return latitude longtitude--------------------------------------//


        var querynear = document.getElementById("Near").value;

        var categories ;

        if(document.getElementById("option1").selected){
          categories = '4bf58dd8d48988d181941735';


          foursquare(querynear,categories,MuseumName,MusLoc,Musjson,Musphlinks,Musphone,Musaddress,MusRating);
        }

        if(document.getElementById("option2").selected){

          categories = '4d4b7105d754a06374d81259';
          foursquare(querynear,categories,foodName,foodLoc,foodjson,foodphlinks,foodphone,foodaddress,foodRating);

        }

        if(document.getElementById("option3").selected){

          categories = '4bf58dd8d48988d1e5931735';

          foursquare(querynear,categories,AEName,AELoc,AEjson,AElinks,AEphone,AEaddress,AERating);
        }

        if(document.getElementById("option4").selected){

          categories = '5267e4d9e4b0ec79466e48c9';//Convention

          foursquare(querynear,categories,EventsName,EventsLoc,Eventsjson,Eventslinks,Eventsphone,Eventsaddress,EventsRating);
        }

        if(document.getElementById("option5").selected){

          categories = '4bf58dd8d48988d1fd941735';//Mall

          foursquare(querynear,categories,ShopName,ShopLoc,Shopjson,Shoplinks,Shopphone,Shopaddress,ShopRating);
        }


//------------Include Foursquare API----------------------------//


    function foursquare(querynear,categories,tmpName,tmpLoc,PhotoJson,PhotoURL,tmpfPhone,tmpfaddress,tmprating){

          // tmpfPhone = [ ];
          // tmpfaddress = [ ];
          // PhotoJson = [];
          // PhotoURL = [];



          var getplaceName = document.getElementById('Near').value;


          $.ajax({
              type:"GET",
              url: "https://maps.googleapis.com/maps/api/geocode/xml?address="+ getplaceName+"&key=AIzaSyDBlU3aP3_tALovlxvjetUCran3lsGrVv4",
              dataType:"xml",
              success: ProcessXml
          });


              function ProcessXml(xml){

              var lat = $(xml).find("geometry").find("location").find("lat").text();
              var lng = $(xml).find("geometry").find("location").find("lng").text();

              var foursq ='https://api.foursquare.com/v2/venues/explore?ll='+ lat+','+lng +' &client_id='+clientid+'&client_secret='+clientsecret +' &v='+vdate+'&categoryId='+categories + '&radius= 12000';

              localStorage.setItem("Getlat", lat);
              localStorage.setItem("Getlng", lng);


         $.ajax({
            type: 'GET',
            url: foursq,
            dataType: 'jsonp',

            success: function(json) {

              var counter = 0;

                for (i = 0; i < 5; i++) {
                  var resultname = json['response']['groups'][0]['items'][i]['venue'].name;
                  var resultlocation = json['response']['groups'][0]['items'][i]['venue'].location;
                  var resultlat = resultlocation.lat;
                  var resultlng = resultlocation.lng;
                  var resultformattedaddress = resultlocation.formattedAddress;


                  var resultcontact = json['response']['groups'][0]['items'][i]['venue'].contact;
                  var resultformattedphone = resultcontact.formattedPhone;
                  var tmpmarker = new google.maps.LatLng(resultlat,resultlng)

                  var resultrating = json['response']['groups'][0]['items'][i]['venue'].rating;
                  var ratingcolor = json['response']['groups'][0]['items'][i]['venue'].ratingColor;

                  // tmprating.push(resultrating);

                  tmpName.push(resultname);
                  tmpLoc.push(tmpmarker);
                  tmpfPhone.push(resultformattedphone);
                  tmpfaddress.push(resultformattedaddress);
                  tmprating.push(resultrating);

                  // markercollector.push(tmpmarker);
                  //console.log(ratingcolor);
                  var placeinfo = resultname +"</br>" + resultformattedphone + "</br>" + "<div id='ratingdiv' style='height:30px; width:30px; background-color:" + "#" + ratingcolor + "'"  + ">"+  resultrating + "</div>";


                  if(tmpName == MuseumName){ 

                      if (tmprating.length == 5){
                        var MuseCatRating = tmprating.average();
                      }
                    
                    $("#m"+i).html(placeinfo);
                  }

                  if(tmpName == foodName){

                     if (tmprating.length == 5){
                        var FoodCatRating = tmprating.average();
                      }
                      
                    $("#f"+i).html(placeinfo);
                  }

                  if(tmpName == AEName){

                      if (tmprating.length == 5){
                        var AECatRating = tmprating.average();
                    
                      }

                    $("#mu"+i).html(placeinfo);
                  }

                  if(tmpName == EventsName){

                      if (tmprating.length == 5){
                        var EventsCatRating = tmprating.average();
                      }

                    $("#ev"+i).html(placeinfo);
                  }

                  if(tmpName == ShopName){

                      if (tmprating.length == 5){
                        var ShopCatRating = tmprating.average();
                      }

                    $("#sp"+i).html(placeinfo);
                  }


                  var resultid = json['response']['groups'][0]['items'][i]['venue'].id;

                  var tmpPhotoJason = 'https://api.foursquare.com/v2/venues/'+ resultid +'/photos?client_id=FEXOI5LO4ESOMFNPU10M53BC40HKPYBBWHZ0T0ED15PUH5ZU&client_secret=NOHDSSWTRZ4LVE4MQHUDI2E20JXR5MF0ZHPA42KMNFYE3CG1&v=20150113';
                  PhotoJson.push(tmpPhotoJason);

                }


                var photoprefixarry =[];

                  for (i = 0; i < 5; i++) {
                        $.ajax({

                        type: 'GET',
                        url: PhotoJson[i],
                        dataType: 'jsonp',
                        success: function(json) {

                            resultphoto = json['response']['photos']['items'][0];
                            photoprefix = resultphoto.prefix;

                            photoprefixarry.push(photoprefix);


                            photopresuffix = resultphoto.suffix;
                            photourl = photoprefix+"150x150" + photopresuffix;
                            PhotoURL.push(photourl);


                            counter = counter +1;
                            if(counter ==5){

                                printmarker(tmpName,tmpLoc,PhotoURL,tmpfPhone,tmpfaddress);

                            }
                        }
                      });
                }

          }
         });
       }
  }






  // ----------------------------------------------------------------------//
  var passlat = localStorage.getItem("Getlat");
  var passlng = localStorage.getItem("Getlng");

  var myLatlng = new google.maps.LatLng(passlat,passlng);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);



        function printmarker(printName,printLoc,printphoto,printfphone,printfaddress){
              var image =null;

              if(printName == MuseumName){
                 image = {
                  url : 'marker/blue.png',
                  size: new google.maps.Size(25, 40),

                };
              }
              if(printName == foodName){
                 image = {
                  url : 'marker/blue.png',
                  size: new google.maps.Size(25, 40),

                };
              }
              if(printName == AEName){
                  image = {
                  url : 'marker/blue.png',
                  size: new google.maps.Size(25, 40),
                };
              }

              if(printName == EventsName){
                  image = {
                  url : 'marker/gray.png',
                  size: new google.maps.Size(25, 40),
                };
              }

              if(printName == ShopName){
                  image = {
                  url : 'marker/yellow.png',
                  size: new google.maps.Size(25, 40),
                };
              }
              var infowindow = new google.maps.InfoWindow({
                  maxWidth: 300
              });

              // console.log(printfphone);
              for(i=0 ; i<printLoc.length ; i++)   {

                   var marker = new google.maps.Marker({
                       position: printLoc[i],
                       map: map,
                       icon: image,
                       title: 'Click to zoom',
                       info :'<div class = "MarkerPopUp" style="width: 300px; ">'+'<IMG BORDER="0" ALIGN="Left" SRC="'+ printphoto[i] +'">' +'<br><div class = "getPrintName">'+  printName[i] +'</div><p></p><br>'+ printfphone[i]  +'<br><br><div class = "getprintfaddress">'+ printfaddress[i] +'</div><br><br>'+'<button id="addbutton" type="button">Add</button>'+'<button id="infobutton" type="button">Info</button>'+'</div>'+'<br>'

                   });

                  //  if(printName == MuseumName){
                  //    Musmarker.push(marker);
                  //  }
                   //
                  //  if(printName == foodName){
                  //    foodmarker.push(marker);
                  //  }

                     google.maps.event.addListener(marker, 'click', function() {
                       //this.setIcon("marker/red.png");
                       infowindow.setContent(this.info);
                       infowindow.open(map, this);
                        var themarker = this;

                     });

                      google.maps.event.addListener(marker, 'mouseover', function() {
                        this.setIcon("marker/red.png");
                      });

                       google.maps.event.addListener(marker, 'mouseout', function() {
                         this.setIcon("marker/blue.png");
                       });




                      if(printName == MuseumName){

                          trigger(marker);
                          function trigger(themarker){
                            // console.log(themarker);
                           $("#m"+i).hover(
                             function() {

                               google.maps.event.trigger(themarker, 'mouseover');
                             }, function() {
                               google.maps.event.trigger(themarker, 'mouseout');
                             }
                           );
                         }
                      }

                      if(printName == foodName){

                          trigger2(marker);
                          function trigger2(fmarker){
                            // console.log(themarker);
                           $("#f"+i).hover(
                             function() {
                               google.maps.event.trigger(fmarker, 'mouseover');
                             }, function() {
                               google.maps.event.trigger(fmarker, 'mouseout');
                             }
                           );
                         }
                      }

                      if(printName == AEName){

                          trigger3(marker);
                          function trigger3(aemarker){
                            // console.log(themarker);
                           $("#mu"+i).hover(
                             function() {
                               google.maps.event.trigger(aemarker, 'mouseover');
                             }, function() {
                               google.maps.event.trigger(aemarker, 'mouseout');
                             }
                           );
                         }
                      }

                      if(printName == EventsName){

                          trigger4(marker);
                          function trigger4(Eventsmarker){
                            // console.log(themarker);
                           $("#ev"+i).hover(
                             function() {
                               google.maps.event.trigger(Eventsmarker, 'mouseover');
                             }, function() {
                               google.maps.event.trigger(Eventsmarker, 'mouseout');
                             }
                           );
                         }
                      }

                      if(printName == ShopName){

                          trigger5(marker);
                          function trigger5(Shopmarker){
                            // console.log(themarker);
                           $("#sp"+i).hover(
                             function() {
                               google.maps.event.trigger(Shopmarker, 'mouseover');
                             }, function() {
                               google.maps.event.trigger(Shopmarker, 'mouseout');
                             }
                           );
                         }
                      }

             }




        }



google.maps.event.addDomListener(window, 'load', initialize2);

}
