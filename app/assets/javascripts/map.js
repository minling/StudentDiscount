function getLocation() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13
  });
  // var infoWindow = new google.maps.InfoWindow({map: map});
  var infoWindow = new google.maps.Marker({
    map:map,
    // draggable:true,
    // animation: google.maps.Animation.DROP,
    // position: new google.maps.LatLng(59.32522, 18.07002),
    icon: 'http://icons.iconarchive.com/icons/newidols.ru/shop/24/star-icon.png' // null = default icon
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      // infoWindow.setContent('You are here');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
};

function showPosition(position) {
  $('#location').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
};

function initMap(){
// debugger;
// var latitude = locations.coords.latitude
// var longitude = locations.coords.longitude

var locations = gon.locations
// [venue.name, venue.latitude, venue.longitude, venue.discount, venue.address, venue.tags.map { |tag| tag.name }]

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
          infowindow.setContent('<h2>'+locations[i][0] +'</h2>' 
                                + '<div class="venue-info"><b>Discount: </b>' + locations[i][3] + '</div>'
                                + '<div class="venue-info"><b>Address: </b>' + locations[i][4] + '</div>'
                                + '<div class="venue-info"><b>Applies to: </b>' + locations[i][5] + '</div>');
          infowindow.open(map, marker);
        }
      })(marker, i));
google.maps.event.addDomListener(window, "load", initMap);
    }
}; 


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