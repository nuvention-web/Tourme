

  function button1(){

    // deletediv();
    // function deletediv(){
    // var div = document.getElementById("item");
    // while(div.firstChild){
    //   div.removeChild(div.firstChild);}
    // }

    // ------------------------------- --------------------------------------------------------------
    // var clientid = 'FEXOI5LO4ESOMFNPU10M53BC40HKPYBBWHZ0T0ED15PUH5ZU'
    // var clientsecret = 'NOHDSSWTRZ4LVE4MQHUDI2E20JXR5MF0ZHPA42KMNFYE3CG1'
    // var vdate = '20150124'
    // var querynear = document.getElementById("locationinput").value;
    // var queryloc = document.getElementById("lookingfor").value;
    // //  var querynear = 'new york'
    // //  var queryloc = 'columbia university'

    // var allName = [];
    // var allLat = [];
    // var allLng = [];
    // var allId = [];
    // var allFormattedPhone = [];



    $(document).ready(function() {

      var foursq = 'https://api.foursquare.com/v2/venues/search?client_id=' + clientid +'&client_secret='+clientsecret +'&v='+vdate+'&near='+ querynear +'&query=' + queryloc;

      $.ajax({
        type: 'GET',
        url: foursq,
        dataType: 'jsonp',
        success: function(json) {

          for (i = 0; i < 27; i++) {

           var resultid = json['response']['venues'][i].id;
           var resultname = json['response']['venues'][i].name;
           var resultcontact = json['response']['venues'][i].contact;
           var resultformattedphone = resultcontact.formattedPhone;



            // alert(resultid);
            // alert(resultname);
            // alert(resultphone);

            var resultlocation = json['response']['venues'][i].location;
            var resultaddress = resultlocation.address;
            var resultlat = resultlocation.lat;
            var resultlng = resultlocation.lng;
            var resultpostcode = resultlocation.postalCode;
            var resultcountry = resultlocation.cc;
            var resultcity = resultlocation.city;
            var resultstate = resultlocation.state;
            var resultformattedaddress = resultlocation.formattedAddress;


            // localStorage.setItem('resultname', JSON.stringify(resultname));
            // localStorage.setItem('resultlat', JSON.stringify(resultlat));
            // localStorage.setItem('resultlng', JSON.stringify(resultlng));

            // var localName = localStorage.getItem("resultname");
            // var localLat = localStorage.getItem("resultlat");
            // var localLng = localStorage.getItem("resultlng");

            allId.push(resultid);
            allName.push(resultname);
            allLat.push(resultlat);
            allLng.push(resultlng);
            allFormattedPhone.push(resultformattedphone);
          }

          console.log(allName);
          console.log(allLat);
          console.log(allLng);

          //document.getElementById("item1").innerHTML = allName[0];

           var resultphotolink = 'https://api.foursquare.com/v2/venues/'+ allId[0] +'/photos?client_id=FEXOI5LO4ESOMFNPU10M53BC40HKPYBBWHZ0T0ED15PUH5ZU&client_secret=NOHDSSWTRZ4LVE4MQHUDI2E20JXR5MF0ZHPA42KMNFYE3CG1&v=20150113'

           console.log(resultphotolink);

           $.ajax({
             type: 'GET',
             url: resultphotolink,
             dataType: 'jsonp',
             success: function(json) {

              for(i=0; i< 20; i++){

              var resultphoto = json['response']['photos']['items'];
              var photoprefix = resultphoto[i].prefix;
              var photopresuffix = resultphoto[i].suffix;
              var photourl = photoprefix+"100x100" + photopresuffix;

              console.log(photoprefix);
              console.log(photourl);
              //document.getElementById("myimage").src = photourl;

              var htmldiv = '<div>' + allName[i] + " " + allFormattedPhone[i]+'<br>' + '<img id="myimage" src="' + photourl +'"></div><br>';
              $('#item').append(htmldiv);
            }
             }
             });



            var locations = [
              [allName[0],allLat[0],allLng[0], 4],
              [allName[1],allLat[1],allLng[1], 4],
              [allName[2],allLat[2],allLng[2], 4],
              [allName[3],allLat[3],allLng[3], 4],
              [allName[4],allLat[4],allLng[4], 4],
              [allName[5],allLat[5],allLng[5], 4],
              [allName[6],allLat[6],allLng[6], 4],
              [allName[7],allLat[7],allLng[7], 4],
              [allName[8],allLat[8],allLng[8], 4],
              [allName[9],allLat[9],allLng[9], 4],
              [allName[10],allLat[10],allLng[10], 4],
              [allName[11],allLat[11],allLng[11], 4],
              [allName[12],allLat[12],allLng[12], 4],
              [allName[13],allLat[13],allLng[13], 4],
              [allName[14],allLat[14],allLng[14], 4],
              [allName[15],allLat[15],allLng[15], 4],
              [allName[16],allLat[16],allLng[16], 4],
              [allName[17],allLat[17],allLng[17], 4],
              [allName[18],allLat[18],allLng[18], 4],
              [allName[19],allLat[19],allLng[19], 4],
              [allName[20],allLat[20],allLng[20], 4],
              [allName[21],allLat[21],allLng[21], 4],
              [allName[22],allLat[22],allLng[22], 4],
              [allName[23],allLat[23],allLng[23], 4],
              [allName[24],allLat[24],allLng[24], 4],
              [allName[25],allLat[25],allLng[25], 4],
            ];

        }
        
      });


      alert(allName.length);

    });

    alert(allName.length);

}
