function AttachPhoto(tmpObject,counter){

      if(tmpObject.categories == "Museum"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#m"+counter).html();
          $("#m"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "Food"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#f"+counter).html();
        $("#f"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "MusicVenue"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#mv"+counter).html();
              $("#mv"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "PerformingArtVenue"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#pav"+counter).html();
              $("#pav"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "NightlifeSpot"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#nl"+counter).html();
              $("#nl"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "OutDoorRecreation"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#or"+counter).html();
              $("#or"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "ShopService"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#ss"+counter).html();
              $("#ss"+counter).html(tmpinfo);
        }
      }

      if(tmpObject.categories == "ThemePark"){
        if(tmpObject.list[counter].photourl){
          var tmpinfo = '<IMG BORDER="0" ALIGN="Left" SRC="'+ tmpObject.list[counter].photourl +'">'+ $("#tp"+counter).html();
              $("#tp"+counter).html(tmpinfo);
        }
      }

};
