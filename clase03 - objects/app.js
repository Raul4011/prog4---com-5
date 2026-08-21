// // // console.log('hello world')


// // // let nombre = 'raul'

// // // nombre = 'belen'

// // // let edad = 40;


// // // const PI = 3.141596

// // // //PI = 5.14

// // // //console.log(PI);

// // // //let nombre2 = prompt('ingres tu nombre')

// // // let edad2 =parseInt(prompt('ingresa tu edad '))


// // // if (edad2 >= 18) {
// // //     alert('eres mayor')
// // // }else {
// // //     alert('eres menor')
// // // }

// // // //if ternario

// // // edad2 === 18 ? alert("ya sos mayor de edad") : alert('no sos mayor')

// // // //console.writeline($"jkaksjfg {nombre}")

// // // console.log(`mi nombree es ${nombre}`)

// // const alumnos = ['santiago','lourdes','alvaro','raul','sofia']


// // //alumnos.forEach(a=>console.log(a))


// // let nombreaBuscar = prompt('ingresa el nombre')

// // for (let i=0 ; i<alumnos.length ;i++) {
// //     nombreaBuscar === alumnos[i] ? console.log('si esta el alumno') : console.log('no esta el alumno');
// // }



// //filter find includes 

// let numeros = [2,3,9,1,7,5,6,4]

// console.log(numeros.sort());


// function Sumar (a,b) {
//     return a+b
// }

// // const Sumar = (a,b) => a+b

// const Restar = (a,b) =>{
// console.log(a+b);
// }


// console.log(Sumar(5,4))




// const Respirar = () =>{

//     console.log("respirando.....")
// }

// Respirar()



// //setInterval(Respirar,1000)

// setTimeout(Respirar,5000)


// const getDate = () =>{
//     const date = new Date()

//     const hs = date.getHours()
//     const min = date.getMinutes()
//     const sec = date.getSeconds()

//         console.log(hs+':'+min+':'+sec);


// }

// getDate()

// //setInterval(getDate,2000)

// let pepito = 'carlos'

// const saludar = (visitante='') =>{
//     console.log('hola'+visitante);
// }

// saludar(pepito)

console.log('clase03');

//clase Persona
// class Persona {
//     nombre;

//     constructor(nombre){
//         this.nombre=nombre
//     }

//     get()
//     set()

//     dormir()
// }
//Objeto literal Alumno
const Alumno = {
    nombre:'leonardo',
    edad:23,
    hobbies:["futbol",'gym','karate'],
    mascotas:[{
        nombreMascota:"kira",
        edadmascota:15,
        raza:'caniche'
    },
{
        nombreMascota:"ody",
        edadmascota:10,
        raza:'caniche toy'
    }],
    casado:false,
    dormir:()=>console.log('zzzZZZzzzzz'),
    comer:()=>console.log('ñam ñam')

}




console.log(Alumno.edad);

console.log(Alumno.mascotas[1].raza);

































