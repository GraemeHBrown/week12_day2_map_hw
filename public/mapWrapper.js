var MapWrapper = function (container, coords, zoom) {
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom
    });
    this.markers = []
}

MapWrapper.prototype.addMarker = function (coords, hasInfo) {
    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
    });
    this.markers.push(marker);
    if (hasInfo) {
        this.addInfoWindow(marker);
    }

}

MapWrapper.prototype.navigate = function () {
    const edinCoords = {lat: 55.94705, lng: -3.2232401}
    this.googleMap.setCenter(edinCoords);
    this.addMarker(edinCoords, false);
}

MapWrapper.prototype.addClickEvent = function () {
    this.googleMap.addListener('click', function (event) {
        var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
        this.addMarker(position, false);
    }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function () {
    this.markers.forEach(function (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    })
}

MapWrapper.prototype.addInfoWindow = function (marker) {
    const infowindow = new google.maps.InfoWindow({
        content: this.createContentNode(),
        maxWidth: 200
    });
    marker.addListener('click', function () {
        infowindow.open(this.googleMap, marker);
    });
}

MapWrapper.prototype.createContentNode = function () {
    const contentContainer = document.createElement('div');
    const h1 = document.createElement('h2');
    h1.innerText = 'Tower of London';
    const pTag = document.createElement('p');
    pTag.innerText = 'Centuries of bloody history ' +
        'around a medieval castle, home to Crown Jewels and iconic Beefeaters.'
    contentContainer.appendChild(h1);
    contentContainer.appendChild(pTag);
    return contentContainer
}