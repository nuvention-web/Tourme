function printmarker(tmpObject,map){
      var image =null;


         image = {
          url : 'marker/purple.png',
          size: new google.maps.Size(25, 40),

        };


      var infowindow = new google.maps.InfoWindow({
          maxWidth: 300
      });

      // console.log(printfphone);
      for(i=0 ; i<5 ; i++)   {
           var marker = new google.maps.Marker({
               position: tmpObject.list[i].markerloc,
               map: map,
               icon: image,
               visible : false,
               info :'<div class = "MarkerPopUp" style="width: 300px; ">'+'<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">' +'<br><div class = "getPrintName">'+  tmpObject.list[i].name +'</div><p></p><br>'+ tmpObject.list[i].phone  +'<br><br><div class = "getprintfaddress">'+ tmpObject.list[i].address +'</div><br><br>'+'<button id="addbutton" type="button">Add</button>'+'<button id="infobutton" type="button">Info</button>'+'</div>'+'<br>'

           });



             google.maps.event.addListener(marker, 'click', function() {
               if(this.icon.url =="marker/purple.png"){
                 this.icon.url = "marker/red.png";
                 this.setMap(map);

               }else if(this.icon.url == "marker/red.png"){
                 this.icon.url = 'marker/purple.png';
                 this.setMap(null);
               }
             });


              google.maps.event.addListener(marker, 'mouseover', function() {
                if(this.icon.url =="marker/purple.png"){
                  this.visible=true;
                  this.setMap(map);
                }
              });

               google.maps.event.addListener(marker, 'mouseout', function() {
                //  console.log(this.icon);
                 if(this.icon.url =="marker/purple.png"){
                  this.setMap(null);
                 }
               });




              if(tmpObject.categories == "Museum"){
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
                     $("#m"+i).click(
                       function() {
                         if(!$(this).is(':checked')){
                           google.maps.event.trigger(themarker, 'click');
                         }else if($(this).is(':checked')){
                           google.maps.event.trigger(themarker, 'click');
                         }

                       }
                     );
                 }
              }

              if(tmpObject.categories == "Food"){
                  trigger2(marker);
                  function trigger2(themarker){
                    // console.log(themarker);
                   $("#f"+i).hover(
                     function() {

                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#f"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }

              if(tmpObject.categories == "MusicVenue"){

                  trigger3(marker);
                  function trigger3(themarker){
                    // console.log(themarker);
                   $("#mv"+i).hover(
                     function() {
                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#mv"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }


              if(tmpObject.categories == "PerformingArtVenue"){
                  trigger4(marker);
                  function trigger4(themarker){
                    // console.log(themarker);
                   $("#pav"+i).hover(
                     function() {
                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#pav"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }

              if(tmpObject.categories == "NightlifeSpot"){

                  trigger5(marker);
                  function trigger5(themarker){
                    // console.log(themarker);
                   $("#nl"+i).hover(
                     function() {
                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#nl"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }

              if(tmpObject.categories == "OutDoorRecreation"){

                  trigger6(marker);
                  function trigger6(themarker){
                    // console.log(themarker);
                   $("#or"+i).hover(
                     function() {
                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#or"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }

              if(tmpObject.categories == "ShopService"){

                  trigger7(marker);
                  function trigger7(themarker){
                    // console.log(themarker);
                   $("#ss"+i).hover(
                     function() {
                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#ss"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }

              if(tmpObject.categories == "ThemePark"){

                  trigger8(marker);
                  function trigger8(themarker){
                    // console.log(themarker);
                   $("#tp"+i).hover(
                     function() {
                       google.maps.event.trigger(themarker, 'mouseover');
                     }, function() {
                       google.maps.event.trigger(themarker, 'mouseout');
                     }
                   );
                   $("#tp"+i).click(
                     function() {
                       if(!$(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }else if($(this).is(':checked')){
                         google.maps.event.trigger(themarker, 'click');
                       }

                     }
                   );
                 }
              }
              //
              // if(printName == OutdoorsName){
              //
              //     trigger9(marker);
              //     function trigger9(Outdoorsmarker){
              //       // console.log(themarker);
              //      $("#od"+i).hover(
              //        function() {
              //          google.maps.event.trigger(Outdoorsmarker, 'mouseover');
              //        }, function() {
              //          google.maps.event.trigger(Outdoorsmarker, 'mouseout');
              //        }
              //      );
              //    }
              // }
              //
              // if(printName == HotelName){
              //
              //     trigger10(marker);
              //     function trigger10(Hotelmarker){
              //       // console.log(themarker);
              //      $("#ht"+i).hover(
              //        function() {
              //          google.maps.event.trigger(Hotelmarker, 'mouseover');
              //        }, function() {
              //          google.maps.event.trigger(Hotelmarker, 'mouseout');
              //        }
              //      );
              //    }
              // }

     }


}
