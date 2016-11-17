//create map function
function myMap() {
  //cache DOM element
  var mapCanvas = document.getElementById("map");

  //create new map options object.. arguements latitute longitude, optional param map zoom
  var mapOptions = {
    center: new google.maps.LatLng(52.059954, -9.505980), zoom: 10
  };

  //create new Map inside DOM element with id of map
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
