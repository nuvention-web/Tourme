
function SinglePlace(name,phone,address,rating,ratingcolor,resultprice,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker) {
  this.name = name;
  this.phone = phone;
  this.address = address;
  this.rating = rating;
  this.ratingcolor = ratingcolor;
  this.price = resultprice;
  this.photojson = tmpPhotoJason;
  this.photourl = PhotoURL;
  this.lat = resultlat;
  this.lng = resultlng; 
  this.markerloc = tmpmarker;
}

function MakeSinglePlace(name,phone,address,rating,ratingcolor,resultprice,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker){


  var tmpSP = new SinglePlace(name,phone,address,rating,ratingcolor,resultprice,tmpPhotoJason,PhotoURL,resultlat,resultlng,tmpmarker);

  return tmpSP;
}
