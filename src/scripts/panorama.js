/**
 * Created by Anton.Zubar on 4/17/2019.
 */
var panorama;
      function initialize() {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('special-offer-card__streetview'),
            {
              position: {lat: 37.869260, lng: -122.254811},
              pov: {heading: 165, pitch: 0},
              zoom: 1
            });
      }