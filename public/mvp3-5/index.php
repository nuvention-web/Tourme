
<!doctype html>
<html>
<head>
  <title>Toureme Landing page</title>

  <meta charset="utf-8" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />


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
  <!-- <link rel="stylesheet" type="text/css" href="style/stylesheet.css"/> -->
  <!-- <script  type="text/javascript" src="jsfile/InMultiselect.js"></script>-->

  <script  type="text/javascript" src="jsfile/infopanel.js"></script>
  <script  type="text/javascript" src="jsfile/initialize.js"></script>
  <script  type="text/javascript" src="jsfile/math.js"></script>
  <!--<script  type="text/javascript" src="jsfile/placesButtonwithCheck.js"></script>-->
  <script  type="text/javascript" src="jsfile/placeinfof.js"></script>
  <script  type="text/javascript" src="jsfile/SinglePlace.js"></script>
  <script  type="text/javascript" src="jsfile/CategoryObject.js"></script>
  <script  type="text/javascript" src="jsfile/printmarker.js"></script>
  <script  type="text/javascript" src="jsfile/AttachPhoto.js"></script>
  <script  type="text/javascript" src="jsfile/SortCategories.js"></script>
  <script  type="text/javascript" src="jsfile/TriggerPopPanel.js"></script>
  <script  type="text/javascript" src="jsfile/PopUpButtonFunction.js"></script>
  <script  type="text/javascript" src="jsfile/SecSearch.js"></script>
  <script  type="text/javascript" src="jsfile/PrintInfoAccordion.js"></script>
  <script  type="text/javascript" src="jsfile/NewPrintMarker.js"></script>
  <!--<script  type="text/javascript" src="jsfile/windowsonload.js"></script>-->



  <!-- bootstra plugin -->
  <link href="plugin/bootstrapplugin/css/bootstrap.min.css" rel="stylesheet">
  <script src="plugin/bootstrapplugin/js/bootstrap.min.js"></script>




</head>

  <style>


      body {
        font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
        margin:0;
      }
      p{
        margin:0;
      }

      #background{

        height:840px;
        background-image: url("./images/Chicago.jpg");
        background-repeat: no-repeat;
        background-size: 100% auto;
        margin:0;
        padding:0;
      }

      #whitelogo{
        padding-left: 35px;
        padding-top:35px;


      }

      #topdiv{
        color:white;
        background-color:rgba(0,0,0,0.3);
        width:730px;
        height:140px;
        margin-top:15%;
        margin-left:auto;
        margin-right:auto;
        font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size:38px;
        font-weight:bold;
      }

      #topdiv input{
        height:27px;
        width:200px;
        border-width: medium;
        font-size:22px;
        float:left;
        margin-top:21px;
      }

      #topdiv button{
        margin-top:21px;
        float:right;
        border-radius:20px;
        font-size:23px;
        font-weight:bold;
        color:white;
        background-color: Transparent;
      }

      #middlediv{
        font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
        /*float:left;*/
        width:730px;
        height:100px;
        margin-left: auto;
        margin-right:auto;
        background-color:rgba(0,0,0,0.3);
      }

      #Near{
        height:30px;
        width:200px;
        /*border-width: medium;*/
        font-size:15px;
        float:left;
        margin-top:5px;
        border-radius:5px;
        /*border-color:gray;*/
        /*margin-top:21px;*/
      }

      #middlediv label {
        float:left;
        color:white;
        margin-top:5px;
        margin-right:8px;
        /*margin-left:100px*/
        font-size:20px;
        font-weight:bold;
      }

      .dropdown{
        margin-top:5px;
        width:133px;
        float:left;
      }

      .dropdown button{
        margin-top:2px;
        padding-top:3px;
        height:29px;
      }



      #Search {

        /*margin-top:21px;*/
        width:100px;
        float:left;
        border-radius:5px;
        font-size:23px;
        font-weight:bold;
        color:white;
        background-color:#e25344;
        margin-left:20px;
        /*background-color: Transparent;*/
      }

      #LocationLabel{
        margin-left:25px;
      }



      #bottomdiv{
        /*background-color:rgba(0,0,255,0.2);*/
        width:850px;
        height:250px;
        padding:0;
        margin-top:40px;
        margin-left:auto;
        margin-right:auto;

      }
      #planning{
        font-size:32px;
        color:#0c5394;
        /*background-color:rgba(255,255,255,0.5);*/
        width:390px;
        margin-left:auto;
        margin-right:auto;
      }
      #left{
        width:130px;
        /*background-color:rgba(255,255,255,0.5);*/
        float:left;
        margin-top:40px;
      }
      #center{
        width:130px;
        /*background-color:rgba(255,255,255,0.5);*/
        float:left;
        margin-top:40px;
        margin-left:26%;
      }
      #right{
        width:130px;
        /*background-color:rgba(255,255,255,0.5);*/
        float:right;
        margin-top:40px;
      }
      #INC{
        width:130px;
        /*background-color:rgba(255,255,255,0.5);*/
        margin-top:190px;
        margin-left:42%;
      }

      .radio p{
        margin:0;
        padding:0;
      }

      #dropdownMenu1{
        width:130px;
      }



      /*popup panel*/

      .modal-content{
        margin-top:85px;
        width:900px;
      }

      .modal-body {
        margin-top:10px;
        width:100%;
        height:330px;
        padding-top:80px;
        /*width:800px;*/
      }
      .modal-body button{
        margin-right:20px;
        height:130px;
        width:194px;
      }


  </style>



  <body>
    <?php
    if($_POST["submit"]){
        // session_start();
        $location = $_POST["location"];
        $time =  $_POST["optradio"];
        $_SESSION["loc"] =   $location;
        $_SESSION["time"] =   $time;
        echo   $_SESSION["loc"];
        echo  $_SESSION["time"] ;
      }

    ?>
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






<!-- original page -->

      <div id="background">

          <div id="whitelogo">
              <a href="./introduction.html" target="blank">
                  <img src="./images/whitelogo.png" height="27" width="100">
              </a>
          </div>

          <div id="topdiv">
              <p>Plan your tour with us and get itinerary</p>
              <p>that suits you best</p>
          </div>


          <div id="middlediv">

                <label id="TimeInputLabel" for="TimeInput">I want to spend </label>
                <form id="myForm">
                    <div class="dropdown">
                      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                        how much time
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">

                          <!-- <div class="radio"> -->
                            <input type="radio" name="optradio" id="Day" style="margin:0 20px 0 10px" value="Day">a day<br>
                          <!-- </div> -->

                          <!-- <div class="radio"> -->
                            <input type="radio" name="optradio" id="Morning" style="margin:0 20px 0 10px"  value="Morning">a morining<br>
                          <!-- </div> -->

                          <!-- <div class="radio"> -->
                            <input type="radio" name="optradio" id="Afternoon" style="margin:0 20px 0 10px"  value="Afternoon">an afternoon<br>
                          <!-- </div> -->
                      </ul>
                    </div>

                    <label id="LocationLabel" for="Near">at</label>
                    <input id="Near" name="location" placeholder="where">
                    <input type="button" id="Search" value="Search" name="submit"></input>
              </form>
          </div>
      </div>



      <div id="bottomdiv">
          <div id="planning">
              <p>Planning is just that simple</p>
          </div>


          <div id="left">
              <p>Let us know</p>
              <p>Where you will</p>
              <p>be and when</p>
              <p>you will be there</p>
          </div>


          <div id="center">
              <p>Choose among</p>
              <p>those attractions</p>
              <p>we show you</p>
          </div>


          <div id="right">
              <p>get your itinerary</p>
              <p>in your phone</p>
              <p>Revisit it anytime</p>
              <p>even offline!</p>
          </div>

          <div id="INC">
              <p>© Tourme,Inc</p>
          </div>

      </div>






  </body>

<script>

var clientid = 'UQAAUCMWUVZVXJHJ3JLYP0UWD25KJZEMZWPBNJCMGLQRXIZY'
var clientsecret = 'YJH1SJKAVRFNVX4MSLY2YA1TEJM5MSNDPVESFLMKCIDZSCNA'
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

//  new search center
var NewhubLat;
var NewhubLng;

// day counter for how many categories
var day;







var time;
var location;
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

$("#Search").click(function(){
    initialize();
});

var autocomplete = new google.maps.places.Autocomplete(Near);

</script>
</html>
