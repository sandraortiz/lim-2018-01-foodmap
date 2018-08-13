const closemodal = document.getElementById("closemodal");
const filters = document.getElementById("filterRestaurant");
const restaurantnames = document.getElementById("restauranname");
const restaurantlugar = document.getElementById("restauranlugar");
const Information = document.getElementById("information");
const areaRest = document.getElementById('holo');
const areaRessss = document.getElementById('holaadio');
const  restauranttipo= document.getElementById('tipoderestaurante');
const datafile1 = '../data/restaurants/restaurant.json'
const datafile2 = '../data/lugaresrestaurant.json'
const llamadas = [];
let restaurant = [];
let restaurantssedes = [];
llamadas.push(fetch(datafile1));
llamadas.push(fetch(datafile2));
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
            restaurant = JSON.parse(response[0])
            restaurantssedes = JSON.parse(response[1])
            todoslosrestaurantes();
            restauranlugar();
        }
    );
const todoslosrestaurantes = () => {
    restaurant.forEach(restaurant => {
        const content = document.createElement('div');
        content.setAttribute('class', "w3-quarter");
        const imagerest = document.createElement('img');
        imagerest.setAttribute('src', `${restaurant.image}`)
        imagerest.setAttribute('class', "w3-round-small w3-padding-16")
        imagerest.setAttribute('style', "width:80%")
        const espacio = document.createElement('br')
        const buttonres = document.createElement('input');
        buttonres.setAttribute('value', 'Ver')
        buttonres.setAttribute('type', 'button')
        buttonres.setAttribute('class', "w3-button w3-black w3-round-small")
        buttonres.setAttribute('id', `${restaurant.name}`)
        content.appendChild(imagerest);
        content.appendChild(espacio);
        content.appendChild(buttonres);
        areaRessss.appendChild(content);
        buttonres.addEventListener('click', (evt) => {
            if (restaurant.name == evt.target.id) {
                let name = `${restaurant.name}`
                let lugar = `${restaurant.distrito}`
                let tipo = `${restaurant.type}`
                restaurantnames.innerHTML = name
                restaurantlugar.innerHTML = lugar
                restauranttipo.innerHTML = tipo
                areaRest.style.display = 'block'
                closemodal.addEventListener('click', () => {
                    areaRest.style.display = 'none'
                })
            }
        })
    })

}

const restauranlugar = () => {
    filters.addEventListener('change', () => {
        areaRessss.innerHTML = '';
        const Information = restaurant.filter((ele) => {
            return (ele.distrito === filters.value)
        });

        Information.forEach(restaurant => {
            const content = document.createElement('div');
            content.setAttribute('class', "w3-quarter");
            const imagerest = document.createElement('img');
            imagerest.setAttribute('src', `${restaurant.image}`)
            imagerest.setAttribute('class', "w3-round-small w3-padding-16")
            imagerest.setAttribute('style', "width:80%")
            const espacio = document.createElement('br')
            const buttonres = document.createElement('input');
            buttonres.setAttribute('value', 'Ver')
            buttonres.setAttribute('type', 'button')
            buttonres.setAttribute('class', "w3-button w3-black w3-round-small")
            buttonres.setAttribute('id', `${restaurant.name}`)
            content.appendChild(imagerest);
            content.appendChild(espacio);
            content.appendChild(buttonres);
            areaRessss.appendChild(content);
            buttonres.addEventListener('click', () => {
                let name = `${restaurant.name}`
                let lugar = `${restaurant.distrito}`
                let tipo = `${restaurant.type}`
                restaurantnames.innerHTML = name
                restaurantlugar.innerHTML = lugar
                restauranttipo.innerHTML = tipo
                areaRest.style.display = 'block'
                closemodal.addEventListener('click', () => {
                    areaRest.style.display = 'none'
                })
            })
        })
    })

}

