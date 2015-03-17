function placeinfof(tmpObject,tmpratinglist,resultprice,hours,resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker){

      if(tmpObject.categories == "Museum"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          MuseumSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var MuseCatRating = tmpratinglist.average();
            tmpObject.averating = MuseCatRating;
            MuseumSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = MuseumSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal =  placeinfonew + placeinfonew2;
            //   $("#m"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "Food"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          FoodSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var FoodCatRating = tmpratinglist.average();
            tmpObject.averating = FoodCatRating;
            FoodSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = FoodSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#f"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "MusicVenue"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          MusicVenueSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var MusicVenueCatRating = tmpratinglist.average();
            tmpObject.averating = MusicVenueCatRating;
            MusicVenueSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = MusicVenueSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#mv"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "PerformingArtVenue"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          PArtSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var PAVrating = tmpratinglist.average();
            tmpObject.averating = PAVrating;
            PArtSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = PArtSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#pav"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "NightlifeSpot"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          NSSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var NSrating = tmpratinglist.average();
            tmpObject.averating = NSrating;
            NSSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = NSSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#nl"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "OutDoorRecreation"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          ORSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var ORrating = tmpratinglist.average();
            tmpObject.averating = ORrating;
            ORSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = ORSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#or"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "ShopService"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          SSSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var SSrating = tmpratinglist.average();
            tmpObject.averating = SSrating;
            SSSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = SSSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#ss"+i).html(placeinfofinal);
            // }
        }
      }

      if(tmpObject.categories == "ThemePark"){
          var tmpSP = MakeSinglePlace(resultname,resultformattedphone,resultformattedaddress,resultrating,ratingcolor,resultprice,hours,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);
          TPSPList.push(tmpSP);
          if (tmpratinglist.length == 5){
            var TPrating = tmpratinglist.average();
            tmpObject.averating = TPrating;
            TPSPList.sort(function(a, b){
              return   parseFloat(b.rating) - parseFloat(a.rating)
            });
            tmpObject.list = TPSPList;
            // for(i=0 ; i<5 ; i++){
            //   var placeinfonew = tmpObject.list[i].name +"</br>" + tmpObject.list[i].phone + "</br>";
            //   var placeinfonew2 =  "<div id='ratingdiv' style='height:30px; width:30px; float:left; background-color:" + "#" + tmpObject.list[i].ratingcolor + "'"  + ">"+  tmpObject.list[i].rating + "</div>";
            //   var placeinfofinal = placeinfonew + placeinfonew2;
            //   $("#tp"+i).html(placeinfofinal);
            // }
        }
      }



};
