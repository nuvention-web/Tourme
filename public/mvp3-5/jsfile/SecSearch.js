function SecSearch(NewhubLat,NewhubLng,Category0){
  // console.log(Category0);
  MuseumSPList=[ ];
  FoodSPList= [ ];
  MusicVenueSPList= [ ];
  PArtSPList= [ ];
  NSSPList= [ ];
  ORSPList= [ ];
  SSSPList= [ ];
  TPSPList= [ ];

  CatList = [];
// -----------------choose different categories-------------------//

  var categoriesID ;


  categoriesID = '4bf58dd8d48988d181941735';
  MuseumObject =  MakeCategoryObject("Museum","Museum Goer","Museum",null,null,categoriesID);
  foursquare(categoriesID,MuseumObject);

  categoriesID = '4d4b7105d754a06374d81259';
  FoodObject =  MakeCategoryObject("Food","Foodie","Food",null,null,categoriesID);
  foursquare(categoriesID,FoodObject);

  categoriesID = '4bf58dd8d48988d1e5931735';
  MusicVenueObject =  MakeCategoryObject("MusicVenue","Music Geek","Music",null,null,categoriesID);
  foursquare(categoriesID,MusicVenueObject);

  categoriesID = '4bf58dd8d48988d1f2931735';
  PArtObject =  MakeCategoryObject("PerformingArtVenue","Hipster","Performing Arts",null,null,categoriesID);
  foursquare(categoriesID,PArtObject);

  categoriesID = '4d4b7105d754a06376d81259';
  NSObject =  MakeCategoryObject("NightlifeSpot","Party Animal","Night Life",null,null,categoriesID);
  foursquare(categoriesID,NSObject);

  categoriesID = '4d4b7105d754a06377d81259';
  ORObject =  MakeCategoryObject("OutDoorRecreation","Adventurer","Outdoor",null,null,categoriesID);
  foursquare(categoriesID,ORObject);

  categoriesID = '4bf58dd8d48988d103951735';    //only clothing
  SSObject =  MakeCategoryObject("ShopService","Shopaholic","Shopping",null,null,categoriesID);
  foursquare(categoriesID,SSObject);

  categoriesID = '4bf58dd8d48988d182941735';
  TPObject =  MakeCategoryObject("ThemePark","Thrill Seeker","Theme Park",null,null,categoriesID);
  foursquare(categoriesID,TPObject);



    function foursquare(categoriesID,tmpObject){




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

              var foursq ='https://api.foursquare.com/v2/venues/explore?ll='+ NewhubLat+','+NewhubLng +' &client_id='+clientid+'&client_secret='+clientsecret +' &v='+vdate+'&categoryId='+categoriesID + '&radius= 8000';
              // + '&sortByDistance=1'
              localStorage.setItem("Getlat", NewhubLat);
              localStorage.setItem("Getlng", NewhubLng);


         $.ajax({
            type: 'GET',
            url: foursq,
            dataType: 'jsonp',

            success: function(json) {

              var counter = 0;
              tmpratinglist = [ ];

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
                var tmpprice = json['response']['groups'][0]['items'][i]['venue'].price;
                var resultprice = null;
                if(tmpprice){
                  resultprice = tmpprice.tier;
                }

                var hours = json['response']['groups'][0]['items'][i]['venue'].hours;
                //
                // if(json['response']['groups'][0]['items'][i]['tips'][0].text.error){
                // console.log(json['response']['groups'][0]['items'][i]['tips'][0].text.error);
                // var comment = null;
                // }else{
                //   var comment = json['response']['groups'][0]['items'][i]['tips'][0].text;
                // }



                tmpratinglist.push(resultrating);
                // var placeinfo = resultname +"</br>" + resultformattedphone + "</br>" + resultformattedaddress[0]  + resultformattedaddress[1]+"</br>" +resultformattedaddress[2]+"</br>"  + "<div id='ratingdiv' style='height:30px; width:30px; background-color:" + "#" + ratingcolor + "'"  + ">"+  resultrating + "</div>";


                var resultid = json['response']['groups'][0]['items'][i]['venue'].id;

                var tmpPhotoJason = 'https://api.foursquare.com/v2/venues/'+ resultid +'/photos?client_id=FEXOI5LO4ESOMFNPU10M53BC40HKPYBBWHZ0T0ED15PUH5ZU&client_secret=NOHDSSWTRZ4LVE4MQHUDI2E20JXR5MF0ZHPA42KMNFYE3CG1&v=20150113';
                placeinfof(tmpObject,tmpratinglist,resultprice,hours,resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,tmpPhotoJason,null,resultlat,resultlng,tmpmarker);

              }



                      function again(counter){
                            $.ajax({

                            type: 'GET',
                            url: tmpObject.list[counter].photojson,
                            dataType: 'jsonp',
                            success: function(json) {
                                resultphoto = json['response']['photos']['items'][0];

                                if(resultphoto){
                                  photoprefix = resultphoto.prefix;
                                }
                                if(resultphoto){
                                  photopresuffix = resultphoto.suffix;
                                }

                                var tmpphotourl = photoprefix+"100x100"+photopresuffix;
                                tmpObject.list[counter].photourl = tmpphotourl;
                                if(counter <5){
                                  // AttachPhoto(tmpObject,counter);
                                }
                                counter = counter +1;
                                if(counter ==5){
                                    // console.log(tmpObject);
                                  CatList.push(tmpObject);
    //---------------------- dont need mrintmarker temporariliy--------------------------------------------
                                  // printmarker(tmpObject,map);

                                  if(CatList.length == 8){
                                    SortCategories(CatList);
                                    PrintInfoAccordion(CatList,Category0,map);
                                    // NewPrintMarker(CatList,Category0);
                                    //  console.log(CatList);
                                    // TriggerPopPanel(CatList);
                                  }
                                }
                                if(counter <5){
                                  again(counter);
                                }
                            }
                          });
                    }
                    again(counter);
          }
         });
       }
  }


  var passlat = localStorage.getItem("Getlat");
  var passlng = localStorage.getItem("Getlng");

  var myLatlng = new google.maps.LatLng(passlat,passlng);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);



google.maps.event.addDomListener(window, 'load', initialize2);


}
