function initialize() {
  var myLatlng = new google.maps.LatLng(17.387140,78.491684);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('renderMap'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'This is where i work!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);