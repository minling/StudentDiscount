 // function initialize() {
 //        var mapCanvas = document.getElementById('map');
 //        var mapOptions = {
 //          center: new google.maps.LatLng(44.5403, -78.5463),
 //          zoom: 8,
 //          mapTypeId: google.maps.MapTypeId.ROADMAP
 //        }
 //        var map = new google.maps.Map(mapCanvas, mapOptions)
 //      }
 //      google.maps.event.addDomListener(window, 'load', initialize);
 //    </script>

alert('heymeow' );
 var map;
  function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}