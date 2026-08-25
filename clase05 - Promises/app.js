// console.log('dom');

// const getColor = () => {
//     let colores = '0123456789ABCDEF'
//     let newColor = ''

//    for (let i = 0; i < 6; i++) {
//     newColor += colores[Math.floor(Math.random() * colores.length )]
//    }

//    return '#'+newColor
// }

// setInterval(()=>{
//     document.getElementById('h1').style.backgroundColor = getColor()
// },1000)

// function Saludar(params) {
//     console.log('hola comision 5');
// }

// document.getElementById('btnSaludar').addEventListener('click',Saludar)

// document.getElementById('h1').innerHTML = 'COM 5 - 2026 - JS '

// let lista = document.getElementById('ul')

// lista.innerHTML = `
// <li>javascript</li>
// <li>c#</li>
// <li>python</li>
// <li>go</li>
// `

// const TragoRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

// const getDrinks = () => {

// }

// const Alumno = {
//     nombre:'raul',
//     apellido:'politi'
// }

// lista.innerHTML =`<li class='liNombre'>${Alumno.nombre}</li>
// <li id='liApellido' class='liApellido'>${Alumno.apellido}</li>
// `
// let mostrar = document.getElementById("mostrar")
// let ocultar = document.getElementById("ocultar")

// const ocultarLista = () =>{
//     lista.style.display = 'none'
// }
// const mostrarLista = ()=>{
//     lista.style.display = 'block'
// }

// mostrar.addEventListener('click',mostrarLista)
// ocultar.addEventListener('click',ocultarLista)

// function changeColor () {
//     document.getElementById('liApellido').style.backgroundColor = 'blue'
// }
// function changeColor2 () {
//     document.getElementById('liApellido').style.backgroundColor = 'red'
// }

// document.getElementById('liApellido').addEventListener('mouseenter',changeColor)
// document.getElementById('liApellido').addEventListener('mouseleave',changeColor2)

const BASE_URL = "";
let search = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const getDrinks = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((resp) => resp.json())
    .then((result) => {
      console.log(result);
      document.getElementById("row").innerHTML = `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top imagen" src="${result.drinks[0].strDrinkThumb}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${result.drinks[0].strDrink}</h5>
    <p class="card-text">categoria: ${result.drinks[0].strCategory}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `;
    })
    .catch((error) => console.error(error.message));
};

getDrinks()

const handleClick = async () =>{
    document.getElementById('row').innerHTML = ""
    let busqueda = document.getElementById('search').value

    // fetch(search+busqueda).then(resp=>resp.json()).then(result=>{
    //     console.log(result)
    //     document.getElementById('search').value = ""
    // })

    let response = await axios.get(search+busqueda)
    console.log(response.data);

    response.data.drinks.map(drink=>document.getElementById("row").innerHTML += `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top imagen" src="${drink.strDrinkThumb}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${drink.strDrink}</h5>
    <p class="card-text">categoria: ${drink.strCategory}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `)



}


document.getElementById('btn').addEventListener('click',handleClick)