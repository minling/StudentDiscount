function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    $('#location').html("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  $('#location').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function initMap(){

 var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
} 


// function initMap() {

//   var myLatLng = {lat: 40.7127, lng: -74.0059};
//   var pinkberry = {lat: 40.747623, lng: -73.986145};

//   var map = new google.maps.Map(document.getElementById('map'), {
//       center: myLatLng,
//       zoom: 13
//     });

//   var marker = new google.maps.Marker({
//     position: pinkberry,
//     map: map,
//     title: 'Pinkberry!'
//   });

//   marker.setMap(map);
// };