<!DOCTYPE html>
<html>
  <head>
    <title>TourMee</title>

    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" ></script>
    <script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places&key=AIzaSyDBlU3aP3_tALovlxvjetUCran3lsGrVv4"></script>
    <!-- multiselect -->
    <!-- <link rel="stylesheet" type="text/css" href="multiselect/jquery.multiselect.css" />
    <link rel="stylesheet" type="text/css" href="multiselect/assets/style.css" />
    <link rel="stylesheet" type="text/css" href="multiselect/assets/scrollbar.js" />
    <link rel="stylesheet" type="text/css" href="multiselect/assets/prettify.css" />
    <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/ui-lightness/jquery-ui.css" />

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="multiselect/assets/prettify.js"></script>
    <script type="text/javascript" src="multiselect/src/jquery.multiselect.js"></script> -->
    <!-- self plugin -->
    <link rel="stylesheet" type="text/css" href="style/stylesheet.css"/>
    <link rel="stylesheet" type="text/css" href="style/stylesheet2.css"/>
    <!-- <script  type="text/javascript" src="jsfile2/InMultiselect.js"></script>-->
    <script  type="text/javascript" src="jsfile2/windowsonload.js"></script>
    <script  type="text/javascript" src="jsfile2/infopanel.js"></script>
    <script  type="text/javascript" src="jsfile2/initialize.js"></script>
    <script  type="text/javascript" src="jsfile2/math.js"></script>
    <!--<script  type="text/javascript" src="jsfile2/placesButtonwithCheck.js"></script>-->
    <script  type="text/javascript" src="jsfile2/placeinfof.js"></script>
    <script  type="text/javascript" src="jsfile2/SinglePlace.js"></script>
    <script  type="text/javascript" src="jsfile2/CategoryObject.js"></script>
    <script  type="text/javascript" src="jsfile2/printmarker.js"></script>
    <script  type="text/javascript" src="jsfile2/AttachPhoto.js"></script>
    <script  type="text/javascript" src="jsfile2/SortCategories.js"></script>
    <script  type="text/javascript" src="jsfile2/TriggerPopPanel.js"></script>
    <script  type="text/javascript" src="jsfile2/PopUpButtonFunction.js"></script>
    <script  type="text/javascript" src="jsfile2/SecSearch.js"></script>
    <script  type="text/javascript" src="jsfile2/PrintInfoAccordion.js"></script>
    <script  type="text/javascript" src="jsfile2/NewPrintMarker.js"></script>

    <script  type="text/javascript" src="jsfile2/PrintItinerary.js"></script>
    <!-- bootstrap Accordion -->
    <script  type="text/javascript" src="jsfile2/RemoveAccordion.js"></script>
    <script  type="text/javascript" src="jsfile2/AccPlusMinus.js"></script>
    <script  type="text/javascript" src="jsfile2/InfoDetailPanel.js"></script>
    <script  type="text/javascript" src="jsfile2/ItineraryDialog.js"></script>
    <!-- bootstrap Stylesheet -->
    <link rel="stylesheet" type="text/css" href="style/BootstrapStyle.css"/>

    <!-- bootstra plugin -->
    <link href="plugin/bootstrapplugin/css/bootstrap.min.css" rel="stylesheet">
    <script src="plugin/bootstrapplugin/js/bootstrap.min.js"></script>

    <!--Dialog  -->
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/themes/ui-darkness/jquery-ui.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>

    <!-- scroll bar -->



  </head>


  <style>
  #contentContainer{
    /*background-color: rgba(100,100,0,0.1);*/
    height:900px;
    width:1250px;
    margin:0;
    margin-left:auto;
    margin-right:auto;
  }


  </style>


  <body>



    <?php
    $lat= $_GET['lat'];
    $lng = $_GET['lng'];
    $num = $_GET['num'];
    ?>


  <div id="contentContainer">
    <div id="mypanel" align="left" >
      <button id="closepanel" type="button" align="left" style="vertical-align: top;" ></button>
      <p id = "panelinfo" > </p>
    </div>

    <div id ="map-container">
    <div id="map-canvas"></div>
    </div>

    <div id="topbar">
        <div id = "logo_white">
          <img src="./images/whitelogo.png" height="27">
        </div>
        <div id="middlediv">
              <form id="myForm">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                      <div id="buttoncontent">how much time</div>
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                          <input type="radio" name="optradio" id="Day" style="margin:0 20px 0 10px" value="Day">a day<br>
                          <input type="radio" name="optradio" id="Morning" style="margin:0 20px 0 10px"  value="Morning">a morining<br>
                          <input type="radio" name="optradio" id="Afternoon" style="margin:0 20px 0 10px"  value="Afternoon">an afternoon<br>
                    </ul>
                  </div>
                  <input id="Near" name="location" placeholder="  where">
                  <!-- <input type="button" id="Search" value="Search" name="submit" onclick="initialize()"></input> -->
                  <button id="search" type="button" onclick="initialize()">Search</button>
            </form>
        </div>
       <!-- <div id = "LinktoMyItinerary">My Itinerary</div> -->

     </div>



     <div id ="accordionWrapper">
       <div id="accorTitle">Top Rated Activities</div>
       <div id="accorSubTitle">Add/delete activities to My Itinerary</div>
       <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
       <div class="panel panel-default" id="headingOne">
         <div class="panel-heading" role="tab" >

           <h4 class="panel-title">
             <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="title1" class="Title">
               Theme #1
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="title1-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
           <div class="panel-body">

               <input type="checkbox" id = "cc0"/>  <div id = "c0" ></div><hr>
               <input type="checkbox" id = "cc1"/>  <div id = "c1"></div><hr>
               <input type="checkbox" id = "cc2"/>  <div id = "c2"></div><hr>
               <input type="checkbox" id = "cc3"/>  <div id = "c3"></div><hr>
               <input type="checkbox" id = "cc4"/>  <div id = "c4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default"  id="headingTwo">
         <div class="panel-heading" role="tab">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="title2">
               Theme #2
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" id="title2-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
           <div class="panel-body">

               <input type="checkbox" id="dc0"/> <div id = "d0" ></div><hr>
               <input type="checkbox" id="dc1"/>  <div id = "d1"></div><hr>
               <input type="checkbox" id="dc2"/>  <div id = "d2"></div><hr>
               <input type="checkbox" id="dc3"/>  <div id = "d3"></div><hr>
               <input type="checkbox" id="dc4"/>  <div id = "d4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default" id="headingThree">
         <div class="panel-heading" role="tab" >
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="title3">
               Theme #3
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" id="title3-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
           <div class="panel-body">

               <input type="checkbox" id="ec0"/>  <div id = "e0" ></div><hr>
               <input type="checkbox" id="ec1"/>  <div id = "e1"></div><hr>
               <input type="checkbox" id="ec2"/>  <div id = "e2"></div><hr>
               <input type="checkbox" id="ec3"/>  <div id = "e3"></div><hr>
               <input type="checkbox" id="ec4"/>  <div id = "e4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default" id="headingFour">
         <div class="panel-heading" role="tab" >
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour" id="title4">
               Theme #4
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour" id="title4-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
           <div class="panel-body">

               <input type="checkbox" id="fc0"/> <div id = "f0" ></div><hr>
               <input type="checkbox" id="fc1"/>  <div id = "f1"></div><hr>
               <input type="checkbox" id="fc2"/>  <div id = "f2"></div><hr>
               <input type="checkbox" id="fc3"/>  <div id = "f3"></div><hr>
               <input type="checkbox" id="fc4"/>  <div id = "f4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default" id="headingFive">
         <div class="panel-heading" role="tab">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFour" id="title5">
               Theme #5
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive" id="title5-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
           <div class="panel-body">

               <input type="checkbox" id="gc0"/> <div id = "g0" ></div><hr>
               <input type="checkbox" id="gc1"/>  <div id = "g1"></div><hr>
               <input type="checkbox" id="gc2"/>  <div id = "g2"></div><hr>
               <input type="checkbox" id="gc3"/>  <div id = "g3"></div><hr>
               <input type="checkbox" id="gc4"/>  <div id = "g4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default" id="headingSix">
         <div class="panel-heading" role="tab">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix" id="title6">
               Theme #6
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix" id="title6-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
           <div class="panel-body">

               <input type="checkbox" id="hc0"/> <div id = "h0" ></div><hr>
               <input type="checkbox" id="hc1"/>  <div id = "h1"></div><hr>
               <input type="checkbox" id="hc2"/>  <div id = "h2"></div><hr>
               <input type="checkbox" id="hc3"/>  <div id = "h3"></div><hr>
               <input type="checkbox" id="hc4"/>  <div id = "h4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default" id="headingSeven">
         <div class="panel-heading" role="tab">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" id="title7">
               Theme #7
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven" id="title7-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
           <div class="panel-body">

               <input type="checkbox" id="ic0"/> <div id = "i0" ></div><hr>
               <input type="checkbox" id="ic1"/>  <div id = "i1"></div><hr>
               <input type="checkbox" id="ic2"/>  <div id = "i2"></div><hr>
               <input type="checkbox" id="ic3"/>  <div id = "i3"></div><hr>
               <input type="checkbox" id="ic4"/>  <div id = "i4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default"  id="headingEight">
         <div class="panel-heading" role="tab">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight" id="title8">
               Theme #8
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight" id="title8-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseEight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
           <div class="panel-body">

               <input type="checkbox" id="jc0"/> <div id = "j0" ></div><hr>
               <input type="checkbox" id="jc1"/>  <div id = "j1"></div><hr>
               <input type="checkbox" id="jc2"/>  <div id = "j2"></div><hr>
               <input type="checkbox" id="jc3"/>  <div id = "j3"></div><hr>
               <input type="checkbox" id="jc4"/>  <div id = "j4"></div><hr>

           </div>
         </div>
       </div>

     <div id ="moreoption">More Options</div>

     </div>
   </div>
   <!-- tbody -->


   <!-- Itinerary list -->


      <div id = "ItineraryWrapper">
        <div id="itineraryTitle">My Itinerary</div>
        <div id="itinerarySubTitle">Drag to order selected activities</div>
      <section id = "MyItinerary1">
       <div class = "MyItinerary" id = "MyItineraryc0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryc1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryc2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryc3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryc4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItineraryd0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryd1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryd2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryd3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryd4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItinerarye0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItinerarye1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItinerarye2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItinerarye3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItinerarye4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItineraryf0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryf1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryf2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryf3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryf4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItineraryg0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryg1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryg2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryg3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryg4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItineraryh0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryh1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryh2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryh3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryh4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItineraryi0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryi1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryi2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryi3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryi4" style="display:none" title="Drag to reorder"></div>

       <div class = "MyItinerary" id = "MyItineraryj0" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryj1" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryj2" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryj3" style="display:none" title="Drag to reorder"></div>
       <div class = "MyItinerary" id = "MyItineraryj4" style="display:none" title="Drag to reorder"></div>
       <button id="MyItinerarybtn" type="button" style="display:none" onclick="SaveItinerary()"><b>Save to My Itinerary</b></button>
     </section>
   </div>



  <!-- Info Panel -->
  <div id="InfoPanel"></div>
</div>

   <!-- pop up panel -->


   <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg">
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
           <h4 class="modal-title" id="myModalLabel">We got you some recommendations!<br><br>Choose if you are most like~</h4>
         </div>
         <div class="modal-body">
           <button id="button1" class="btn btn-primary" data-dismiss="modal" value = "button1"></button>
           <button id="button2" class="btn btn-primary" data-dismiss="modal" value = "button2"></button>
           <button id="button3" class="btn btn-primary" data-dismiss="modal" value = "button3"></button>
           <button id="button4" class="btn btn-primary" data-dismiss="modal" value = "button4"></button>
         </div>
         <div class="modal-footer">
           <button id="button5" type="button" class="btn btn-default" data-dismiss="modal">No,thanks. Show me all the options</button>
         </div>
       </div>
     </div>
   </div>


   <div id="dialog" title="Create Itinerary">
    <form action="" method="post">
    <label>Save the Itinerary as:</label>
    <input type="text" id="SaveItineraryName">
    <input id="submit" type="button" value="Submit">
    </form>
  </div>

     <!-- <div id="control_panel" style="float:left;width:40%;text-align:left;padding-top:10px"> -->

    <!-- <div id="callback">  </div> -->

 </body>

 <script>

     // info for get json from foursquare

     var clientid = 'FEXOI5LO4ESOMFNPU10M53BC40HKPYBBWHZ0T0ED15PUH5ZU'
     var clientsecret = 'NOHDSSWTRZ4LVE4MQHUDI2E20JXR5MF0ZHPA42KMNFYE3CG1'
     var vdate = '20150124'
     // user add in to usercollect list
     var usercollect=[ ];
     // for count average rating
     var tmpratinglist = [ ];
     // get photo url
     var resultphoto ;
     var photoprefix ;
     var photopresuffix ;
     //  -----------------------------------categories-----------------------------
     // for museum categories
     var MuseumObject;
     var MuseumSPList = [ ];
     // for Food categories
     var FoodObject;
     var FoodSPList= [ ];
     // for MusicVenue categories
     var MusicVenueObject;
     var MusicVenueSPList= [ ];
     // for Performing Art Venue categories
     var PArtObject;
     var PArtSPList= [ ];
     //  for Nightlife Spot
     var NSObject;
     var NSSPList= [ ];
     //  for Outdoor &Recration
     var ORObject;
     var ORSPList= [ ];
     //  for Shop and Service
     var SSObject;
     var SSSPList= [ ];
     //  for ThemePark
     var TPObject;
     var TPSPList= [ ];

    //  collect sorted categories
    var CatList = [ ];

    var NewhubLat;
    var NewhubLng;
    // var autocomplete = new google.maps.places.Autocomplete(Near);


var lat = <?php echo $lat?>;
var lng = <?php echo $lng?>;
var num = <?php echo $num?>;
var obj = JSON.parse(sessionStorage.getItem('tmpjson'));
var loc = sessionStorage.getItem('tmploc');
// carry value
$("#Near").val(loc);
if(num == 5){
  $("#dropdownMenu1").html("a "+"day"+"<span class='caret'></span>");
}else if(num ==3){
  $("#dropdownMenu1").html("an "+"afternoon"+"<span class='caret'></span>");
}else{
  $("#dropdownMenu1").html("a "+"morning"+"<span class='caret'></span>");
}


SecSearch(parseFloat(lat),parseFloat(lng),obj,num);


$("input[type=radio]").click(
  function() {
    if($("#Day").is(':checked')){
      time = $(this).val();
      $("#dropdownMenu1").html("a "+"day"+"<span class='caret'></span>");
    }else if($("#Morning").is(':checked')){
      time = $(this).val();
      $("#dropdownMenu1").html("a "+"morning"+"<span class='caret'></span>");
    }else{
      time = $(this).val();
      $("#dropdownMenu1").html("an "+"afternoon"+"<span class='caret'></span>");
    }

    // console.log(time);
  }
);

function SaveItinerary(){
  var DivElementContent = document.getElementById("MyItinerary1").innerHTML;
  var cutcharcter = DivElementContent.indexOf("<button");
  var cutDivElementContent = DivElementContent.substring(0,cutcharcter);
  localStorage.setItem("SaveItinerary", cutDivElementContent);

}

$('#LinktoMyItinerary').bind( 'click', function(){
  $("#InfoPanel").slideToggle("slow");
  var SaveItinerary = localStorage.getItem("SaveItinerary");
  var SaveItineraryTitle = localStorage.getItem("SaveItineraryTitle");


  $("#InfoPanel").html("<IMG BORDER='0' ALIGN='Left' width = '300' height ='300' SRC='https://workingtechmom.files.wordpress.com/2010/09/img_4570.jpg'"+"<h1><b>"+ SaveItineraryTitle +"</b></h1><br><div id = 'scrollbar'>"+ SaveItinerary + "</div>");
 });


    $("#InfoPanel").click(function(){
        $("#InfoPanel").toggle("slow");
        $("#MyItinerary1").tooltip();
    });


$(function () {
  $("#MyItinerary1").sortable({
    placeholder: "highlight",
    start: function (event, ui) {
      ui.item.toggleClass("highlight");
    },
    stop: function (event, ui) {
      ui.item.toggleClass("highlight");
    }
  });
  $("#MyItinerary1").disableSelection();
});

 </script>

 <style>

.highlight {
    margin-top: 10%;
    margin-right: 20%;
    border: dotted 2px #00CC66;
    background-color: #0099FF;
}

#MyItinerary1 div{

    float: right;
    width: 300px;
    height: 70px;

}
 </style>
