function NewPrintMarker(tmpObject,map,tmpDivName,tmpCheckName){
    // console.log(tmpObject);
    // console.log(tmpDivName);
    // console.log(tmpCheckName);

      var image =null;
      image = {
        url : 'marker/purple.png',
        size: new google.maps.Size(25, 40),
      };


      var infowindow = new google.maps.InfoWindow({
          maxWidth: 300
      });


      for(i=0 ; i<5 ; i++)   {
          // console.log(tmpObject.list[i].markerloc);
           var marker = new google.maps.Marker({
               position: tmpObject.list[i].markerloc,
               map: map,
               icon: image,
               visible : false,
               info :'<div class = "MarkerPopUp" style="width: 300px; ">'+'<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[i].photourl +'">' +'<br><div class = "getPrintName">'+  tmpObject.list[i].name +'</div><p></p><br>'+ tmpObject.list[i].phone  +'<br><br><div class = "getprintfaddress">'+ tmpObject.list[i].address +'</div><br><br>'+'<button id="addbutton" type="button">Add</button>'+'<button id="infobutton" type="button">Info</button>'+'</div>'+'<br>'

           });

           if(i==0){
             marker.visible=true;
             marker.icon.url= "marker/red.png";
           }

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




              // if(tmpObject.categories == "Museum"){
                  trigger(marker);
                  function trigger(themarker){
                    // console.log(themarker);
                     $("#" + tmpDivName+i).hover(
                       function() {
                         google.maps.event.trigger(themarker, 'mouseover');
                         $(this).css('background','#f2f9ff');
                       }, function() {
                         google.maps.event.trigger(themarker, 'mouseout');
                         $(this).css('background','white');
                       }
                     );
                     $("#"+tmpCheckName+i).click(
                       function() {
                         if(!$(this).is(':checked')){
                           google.maps.event.trigger(themarker, 'click');
                         }else if($(this).is(':checked')){
                           google.maps.event.trigger(themarker, 'click');
                         }

                       }
                     );
                 }
              // }



     }


}
