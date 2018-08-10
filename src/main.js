const  restaurantname =  document.getElementById('name')
const  restauranoptio = document.getElementById("restauranOption")
const datafile1 = '../data/restaurant.json'
const llamadas = [];
let restaurant= [];
llamadas.push(fetch(datafile1));
Promise.all(llamadas)
  .then(
    response => Promise.all(
      response.map(
        data => data.text()
      )
    )
  )
  .then(
    response => {
     restaurants= JSON.parse(response[0])
     allRestaurant();
      console.log(restaurants);
    }
  );
  const allRestaurant  = () => {
  restaurants.forEach(restaurant => {
    // const restaurantName = (restaurant.image)
    // console.log(restaurantName);
    const containerRestauran= document.createElement('div');
    containerRestauran.setAttribute
    const container = document.createElement('div');
    container.setAttribute('class', "w3-container w3-white" )
    const image =  document.createElement('img');
    image.setAttribute('class' , "w3-round-large");
    image.setAttribute('style' , "width:50%");
    image.setAttribute('src', `${restaurant.image}` )
   restauranoptio.appendChild(container);
    container.appendChild(image);

    // restaurantname.innerHTML +=`<img src="${restaurant.image}" alt="user" class="profile-photo" />`;
  })
  }
 
