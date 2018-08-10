const restaurantname = document.getElementById('name')
const restaurantsInformation = document.getElementById("restauranInformation");
 const restaurantsInformations = document.getElementById("hola");
const restauranoptio = document.getElementById("restauranInformations" );
const closemodal = document.getElementById("closemodal");
const filters = document.getElementById("filterRestaurant");
const option = document.getElementById("option");

 fetch('../data/restaurant.json')
    .then(response => response.json())
    .then(restaurants => {
        restaurants.forEach(restaurant => {
            const content = document.createElement('div');
            content.setAttribute('class', "w3-quarter");
            const imagerest = document.createElement('img');
            imagerest.setAttribute('src', `${restaurant.image}`)
            imagerest.setAttribute('class', "w3-round-small w3-padding-16")
            imagerest.setAttribute('style', "width:80%" )
            const espacio = document.createElement('br')
            const buttonres = document.createElement('input');
             buttonres.setAttribute('value', 'Ver')
             buttonres.setAttribute('type', 'button')
             buttonres.setAttribute('class' ,"w3-button w3-black w3-round-small" )
             buttonres.setAttribute('id', `${restaurant.id}`)
             content.appendChild(imagerest);
             content.appendChild(espacio);
             content.appendChild(buttonres);
            restaurantsInformation.appendChild(content);
            buttonres.addEventListener('click', (evt) => {
              if (restaurant.id == evt.target.id) {
    const name = `${restaurant.name}`
    const lugar = `${restaurant.distrito}`
    restaurantsInformations.innerHTML = name + `<br>` +lugar
                restauranoptio.style.display = 'block'
                    closemodal.addEventListener('click', () => {
                      restauranoptio.style.display = 'none'
                    
                    })
                }
            })
            filter(restaurant);
        })


    })
 
    const  filter = (restaurant) =>{
filters.addEventListener('change' , () => {
  const filtor = filters.value;
  if(filtor === "Distrito")
  {
    filters.style.display = "none";
// const select = document.createElement('select') 
// option.appendChild(select);
const optionSede = document.createElement('OPTION');
option.style.display = 'block';
const resdis = (restaurant.distrito).split('-',1)[0];
    optionSede.innerHTML = resdis
    console.log (optionSede);
    option.appendChild(optionSede);
  }
})
    }
// const allRestaurant = () => {
//     restaurants.forEach(restaurant => {
//         restauranoptio.innerHTML +=
//             `<div class="w3-third w3-margin-bottom" >
//     <img src="${restaurant.image}" style="width:80%"  "padding: 5px" width: 150px; class="w3-round-large" > 
//     <br>
//    <button class="w3-button w3-black w3-margin-bottom" id="information">Ver</button>
//     </div>`
//         const buttonmodal = document.getElementById('information');
//         buttonmodal.addEventListener('click', () => {
//             alert('hola');
//         })
//     })

// }



