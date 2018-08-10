const restaurantname = document.getElementById('name')
const restauranoptio = document.getElementById("restauranOption");
fetch('../data/restaurant.json')
  .then(response => response.json())
  .then(restaurants => {
    restaurants.forEach(restaurant => {
      // const nameRest = restaurant.image;
      const content = document.createElement('div');
      content.setAttribute('class', "w3-third w3-margin-bottom");
      const imagerest = document.createElement('img');
      imagerest.setAttribute( 'src' , `${restaurant.image} `)
      imagerest.setAttribute('class' , "w3-round-large")
      imagerest.setAttribute('style', "width:60%" )
      const buttonres = document.createElement('input');
      buttonres.setAttribute('value','Ver' )
      buttonres.setAttribute('type', 'button')
      buttonres.setAttribute('id' , "hola" )
     content.appendChild(imagerest);
      content.appendChild(buttonres);
      restauranoptio.appendChild(content);
      })
  })

const allRestaurant = () => {
  restaurants.forEach(restaurant => {
    restauranoptio.innerHTML +=
      `<div class="w3-third w3-margin-bottom" >
    <img src="${restaurant.image}" style="width:80%"  "padding: 5px" width: 150px; class="w3-round-large" > 
    <br>
   <button class="w3-button w3-black w3-margin-bottom" id="information">Ver</button>
    </div>`
    const buttonmodal = document.getElementById('information');
    buttonmodal.addEventListener('click', () => {
      alert('hola');
    })
  })

}



