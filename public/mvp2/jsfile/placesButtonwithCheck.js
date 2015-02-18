$(window).load(function() {

  $("select").multiselect({
     click: function(event, ui){
        // $callback.text(ui.value + ' ' + (ui.checked ? 'checked' : 'unchecked') );
          
        if(ui.value == "Museum"){
        // alert(ui.value);
        // alert(ui.checked);
           if(ui.checked == true){
             $("#MuseumButton").show();
           }else{
             $("#MuseumButton").hide();
           }
        }

        if(ui.value == "Food"){
          if(ui.checked == true){
            $("#FoodButton").show();
          }else{
            $("#FoodButton").hide();
          }
        }

        if(ui.value == "MusicVenue"){
          if(ui.checked == true){
            $("#MusicButton").show();
          }else{
            $("#MusicButton").hide();
          }
        }

        if(ui.value == "Events"){
          if(ui.checked == true){
            $("#EventsButton").show();
          }else{
            $("#EventsButton").hide();
          }
        }
        
        if(ui.value == "Shopping"){
          if(ui.checked == true){
            $("#ShopButton").show();
          }else{
            $("#ShopButton").hide();
          }
        }


        }
     });
  });
