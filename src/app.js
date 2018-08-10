// const nombrerestaurant = document.getElementById('name');
// window.onload = () => {
//     initMap();
// }
// let map;
// let infowindow;
// const initMap = () =>{
//     navigator.geolocation.getCurrentPosition(function (pos) {
//         lat = pos.coords.latitude;
//         lon = pos.coords.longitude;
//         var myLatlng = new google.maps.LatLng(lat, lon);
//         var mapOptions = {
//             center: myLatlng,
//             zoom: 15,
//             mapTypeId: google.maps.MapTypeId.SATELLITE
//         };
//         map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
//         infowindow = new google.maps.InfoWindow();
//         var request = {
//             location: myLatlng,
//             radius: 8000,
//             types: ['restaurant']
//         };
//         var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch(request, function (results, status) {
//             if (status === google.maps.places.PlacesServiceStatus.OK) {
//                 for (var i = 0; i < results.length; i++) {
//                     const restaurantinfo = results[i];
//                     crearMarcador(restaurantinfo);
//                     // restaurantinfomation(restaurantinfo);
//                 }
//             }
//         });
//     });
// }


// function crearMarcador(place) {
//     var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//     });
//     google.maps.event.addListener(marker, 'click', function () {
//         infowindow.setContent(place.name);
//         infowindow.open(map, this);
//        });
// }
//  const restaurantinfomation = (restaurantinfo) => {
//      const name = restaurantinfo.name;

//      const contPost = document.createElement('div');
//      contPost.setAttribute('class', "w3-container w3-card w3-white w3-round w3-margin")
 
//     //  const image = document.createElement('img');
//     //  image.setAttribute('class', "w3-left w3-circle w3-margin-top")
//     //  image.setAttribute('style', "width:60px")
//     //  image.setAttribute('alt', "Avatar")
 
//      const espacaio = document.createElement('hr');
//      espacaio.setAttribute('class', "w3-clear")
 
//      const author = document.createElement('h4');
//      author.setAttribute('style',"margin-top: 22px,");
//      author.setAttribute('class',"author");
//      // author.setAttribute('class',  )
 
//      const textPost = document.createElement('p');
//      textPost.setAttribute('class', 'w3-left w3-circle w3-margin-right');
//     //  textPost.setAttribute('id', postskey);
//      textPost.innerHTML = `${restaurantinfo.name}`;

//      nombrerestaurant.appendChild(contPost);
//     //  contPost.appendChild(image);
//      contPost.appendChild(author);
//      contPost.appendChild(espacaio);
//      contPost.appendChild(textPost);
//     //  contPost.appendChild(br);
//      contPost.appendChild(espacaio);
//     //  contPost.appendChild(contadorlike);
  
//  }

// window.filterRestaurant = ()

// ],
//     {
//         "name": "Restaurante Del Campo Chicken & Grill",
     
//         "description": "Cadena de comida rápida conocida por sus  pollo frito que también sirve alitas y acompañamientos.",
//         "type": "polleria",
//         "distrito": "Miraflores"
//     },
//     {
//         "name": "Donatello",
       
//         "description": "A traditionally decorated Italian restaurant with checkered tablecloths & sports teams' flags.",
//         "type": "italiana",
//         "distrito": "Miraflores"
//     },
//     {
//         "name": "El Paraíso de la Salud",
    
//         "description": "Restaurante vegano em São Paulo, na região da Augusta. Comida boa com preço justo e pizzas irresistíveis. Democratizando a alimentação vegana.",
//         "type": "vegana",
//         "distrito": "Barranco"
//     },
//     {
//         "name": "Toshi Nikkei",
     
//         "description": "Refined restaurant with artistic Japanese décor, serving  temaki & other delicacies.",
//         "type": "japonesa",
//         "distrito": "Barranco"
//     },
//     {
//         "name": "Kinjo Ramen",
     
//         "description": "This modern spot offers Japanese fare, with a variety of  fish, a buffet & all-you-can-eat options.",
//         "type": "japonesa",
//         "distrito": "Barranco"
//     },
//     {
//         "name": "K'tana cocina japonesa",
        
//         "description": "This modern spot offers Japanese fare, with a variety of  fish, a buffet & all-you-can-eat options.",
//         "type": "japonesa",
//         "distrito": "Barranco"
//     },
//     {
//         "name": "McDonald's",
        
//         "description": "Classic, long-running fast-food chain known for its burgers, fries & shakes.",
//         "type": "fast food",
//         "distrito": "Barranco"
//     }