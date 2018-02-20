var initialize = function(){
  var mapDiv = document.getElementById('main-map');

  var center = { lat: 40.712784, lng: -74.005941 };

  const tol = {lat: 51.5081124, lng: -0.078138 }

    // 51.5081124,-0.078138,

  var mainMap = new MapWrapper(mapDiv, tol, 10);
  mainMap.addMarker(tol, true);
  // mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers')
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

    const navigateButton = document.getElementById('button-navigate')
    navigateButton.addEventListener('click', mainMap.navigate.bind(mainMap))
}

window.addEventListener('load', initialize);
