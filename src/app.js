

// var container = document.getElementById('container');
// setTimeout(function() {
//     container.classList.add('cerrar');
//   document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
// }, 9000);
const nombrerestaurant = document.getElementById('name');
window.onload = () => {
    initMap();
}
var map;
var infowindow;
function initMap() {
    // Creamos un mapa con las coordenadas actuales
    navigator.geolocation.getCurrentPosition(function (pos) {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, lon);
        var mapOptions = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

        // Creamos el infowindow
        infowindow = new google.maps.InfoWindow();

        // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
        var request = {
            location: myLatlng,
            radius: 8000,
            types: ['restaurant']
        };

        // Creamos el servicio PlaceService y enviamos la petición.
        var service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    const restaurantinfo = results[i];
                    crearMarcador(restaurantinfo);
                    //  restaurante (restaurantinfo);
    nombrerestaurant.innerText += restaurantinfo.name;
    
                }
            }
        });
    });
}

function crearMarcador(place) {
    // Creamos un marcador
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    // Asignamos el evento click del marcador
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
        if(place.photos)
{
alert(place.photos[0].getUrl({'maxWidth': 350, 'maxHeight': 350}));
}
    });
}


// function restaurante (restaurantinfo) {
// console.log(restaurantinfo);

// }