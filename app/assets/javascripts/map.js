function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition();
    debugger;
  }
  else {
    $('#location').html("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  $('#location').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

function initMap(){
// debugger;
// var latitude = locations.coords.latitude
// var longitude = locations.coords.longitude

// var locations = gon.locations
 var locations = [
      ['Pinkberry', 40.747623, -73.986145, 'www.pinkberry.com'],
      ['Flatiron School', 40.705329, -74.01397],
      ['Kickboxing', 40.746526, -73.992778],
      ['Eight turn crepe', 40.722350, -73.996625]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(40.7127, -74.0059),
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
          //setting the content 
          infowindow.setContent(locations[i][0] + locations[i][3]);
          infowindow.open(map, marker);
        }
      })(marker, i));
google.maps.event.addDomListener(window, "load", initMap);
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