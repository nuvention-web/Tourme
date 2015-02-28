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
    <!-- bootstrap Accordion -->
    <script  type="text/javascript" src="jsfile2/RemoveAccordion.js"></script>
    <script  type="text/javascript" src="jsfile2/AccPlusMinus.js"></script>
    <!-- bootstrap Stylesheet -->
    <link rel="stylesheet" type="text/css" href="style/BootstrapStyle.css"/>

    <!-- bootstra plugin -->
    <link href="plugin/bootstrapplugin/css/bootstrap.min.css" rel="stylesheet">
    <script src="plugin/bootstrapplugin/js/bootstrap.min.js"></script>




  </head>





  <body>



    <?php
    $lat= $_GET['lat'];
    $lng = $_GET['lng'];
    $num = $_GET['num'];
    ?>


  <!-- <div id="container"> -->
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
                      how much time
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                          <input type="radio" name="optradio" id="Day" style="margin:0 20px 0 10px" value="Day">a day<br>
                          <input type="radio" name="optradio" id="Morning" style="margin:0 20px 0 10px"  value="Morning">a morining<br>
                          <input type="radio" name="optradio" id="Afternoon" style="margin:0 20px 0 10px"  value="Afternoon">an afternoon<br>
                    </ul>
                  </div>
                  <input id="Near" name="location" placeholder="where">
                  <!-- <input type="button" id="Search" value="Search" name="submit" onclick="initialize()"></input> -->
                  <button id="search" type="button" onclick="initialize()">Search</button>
            </form>
        </div>

     </div>




     <div id ="accordionWrapper">
       <div id="accorTitle">Top Rated Activities</div>
       <div id="accorSubTitle">Select activities for your tour here</div>
       <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingOne">

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
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingTwo">
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
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingThree">
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
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingFour">
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
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingFive">
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
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingSix">
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
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingSeven">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" id="title7">
               Theme #7
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven" id="title7-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
           <div class="panel-body">

               <input type="checkbox" id="hc0"/> <div id = "i0" ></div><hr>
               <input type="checkbox" id="hc1"/>  <div id = "i1"></div><hr>
               <input type="checkbox" id="hc2"/>  <div id = "i2"></div><hr>
               <input type="checkbox" id="hc3"/>  <div id = "i3"></div><hr>
               <input type="checkbox" id="hc4"/>  <div id = "i4"></div><hr>

           </div>
         </div>
       </div>
       <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingEight">
           <h4 class="panel-title">
             <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight" id="title8">
               Theme #8
             </a>
             <div data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight" id="title8-1" class="TitleSymbol">+</div>
           </h4>
         </div>
         <div id="collapseEight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
           <div class="panel-body">

               <input type="checkbox" id="hc0"/> <div id = "j0" ></div><hr>
               <input type="checkbox" id="hc1"/>  <div id = "j1"></div><hr>
               <input type="checkbox" id="hc2"/>  <div id = "j2"></div><hr>
               <input type="checkbox" id="hc3"/>  <div id = "j3"></div><hr>
               <input type="checkbox" id="hc4"/>  <div id = "j4"></div><hr>

           </div>
         </div>
       </div>

     </div>
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

SecSearch(parseFloat(lat),parseFloat(lng),obj,num);

$("input[type=radio]").click(
  function() {
    if($("#Day").is(':checked')){
      time = $(this).val();
    }else if($("#Morning").is(':checked')){
      time = $(this).val();
    }else{
      time = $(this).val();
    }
    $("#dropdownMenu1").html(time+"<span class='caret'></span>");
    // console.log(time);
  }
);



 </script>
