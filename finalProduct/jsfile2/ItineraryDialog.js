$(document).ready(function() {
      $(function() {
            $("#dialog").dialog({
            autoOpen: false,
            // modal:true,
            show: 'fade',
            hide: 'fade'
            });
            $("#MyItinerarybtn").on("click", function() {

              $("#dialog").dialog("open");
               });
                });
            // Validating Form Fields.....
            $("#submit").click(function(e) {
              var name = $("#SaveItineraryName").val();
                if (name === '') {
                  alert("Please fill in the Itinerary Name");
                  e.preventDefault();
                    }
                else {

                  localStorage.setItem("SaveItineraryTitle", name);
                  $("#dialog").dialog('close');
                  alert("'"+ name +"'"+ " is saved to My Itinerary");
          }
      });
 });
