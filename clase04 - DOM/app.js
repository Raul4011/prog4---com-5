console.log('dom');




const getColor = () => {
    let colores = '0123456789ABCDEF'
    let newColor = ''


   for (let i = 0; i < 6; i++) {
    newColor += colores[Math.floor(Math.random() * colores.length )]
   }

   return '#'+newColor
}

setInterval(()=>{
    document.getElementById('h1').style.backgroundColor = getColor()
},1000)



function Saludar(params) {
    console.log('hola comision 5');
}

document.getElementById('btnSaludar').addEventListener('click',Saludar)


document.getElementById('h1').innerHTML = 'COM 5 - 2026 - JS '

let lista = document.getElementById('ul')


lista.innerHTML = `
<li>javascript</li>
<li>c#</li>
<li>python</li>
<li>go</li>
`



const TragoRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const getDrinks = () => {

}

const Alumno = {
    nombre:'raul',
    apellido:'politi'
}


lista.innerHTML =`<li class='liNombre'>${Alumno.nombre}</li>
<li id='liApellido' class='liApellido'>${Alumno.apellido}</li>
`
let mostrar = document.getElementById("mostrar")
let ocultar = document.getElementById("ocultar")

const ocultarLista = () =>{
    lista.style.display = 'none'
}
const mostrarLista = ()=>{
    lista.style.display = 'block'
}

mostrar.addEventListener('click',mostrarLista)
ocultar.addEventListener('click',ocultarLista)

function changeColor () {
    document.getElementById('liApellido').style.backgroundColor = 'blue'
}
function changeColor2 () {
    document.getElementById('liApellido').style.backgroundColor = 'red'
}

document.getElementById('liApellido').addEventListener('mouseenter',changeColor)
document.getElementById('liApellido').addEventListener('mouseleave',changeColor2)