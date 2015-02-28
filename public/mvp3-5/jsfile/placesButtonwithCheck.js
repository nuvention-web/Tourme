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

        if(ui.value == "GasStations"){
          if(ui.checked == true){
            $("#GasButton").show();
          }else{
            $("#GasButton").hide();
          }
        }

        if(ui.value == "Dessert"){
          if(ui.checked == true){
            $("#DessertButton").show();
          }else{
            $("#DessertButton").hide();
          }
        }

        if(ui.value == "NightLife"){
          if(ui.checked == true){
            $("#NightlifeButton").show();
          }else{
            $("#NightlifeButton").hide();
          }
        }

        if(ui.value == "Outdoors"){
          if(ui.checked == true){
            $("#OutdoorsButton").show();
          }else{
            $("#OutdoorsButton").hide();
          }
        }

        if(ui.value == "Hotel"){
          if(ui.checked == true){
            $("#HotelButton").show();
          }else{
            $("#HotelButton").hide();
          }
        }


        }
     });
  });
