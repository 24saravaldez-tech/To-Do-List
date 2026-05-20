let miBoton = document.querySelector('#btnMe')

// miBoton.addEventListener('click', (event) =>{
//     alert('Ay!, Hubo un click')
// })

miBoton.addEventListener('mouseover', (event) => {
    miBoton.className = 'btn btn-danger'
})

miBoton.addEventListener('mouseout', (event) => {
    miBoton.className = 'btn btn-dark'
})

miBoton.addEventListener('dblclick', (event) => {
    miBoton.className = 'btn btn-warning'
})

miBoton.addEventListener('mousedown', (event) => {
    miBoton.className = 'btn btn-primary'
})

// mouseup → cuando sueltas el botón ya
// mouseover → cuando pasas el mouse encima ya
// mouseout → cuando sacas el mouse ya
// mousemove → cuando mueves el mouse
// mousedown -> cuando el mause se queda presionando el boton ya


// keydown → cuando presionas una tecla
// keyup → cuando sueltas una tecla

miBoton.addEventListener('mouseup', (event) => {
    miBoton.className = 'btn btn-light'
})


miBoton.addEventListener('mousemove', (event) => {
    miBoton.className = 'btn btn-succes'
})


let teclado = document.querySelector("#teclado")


miBoton.addEventListener('keydown', (event) => {
    if(event.key == 'a'){
        alert('Has presionado la tecla a')
    }
})


// miBoton.addEventListener('keyup', (event) => {
//     if (event.key == 'Enter') {
//         alert('No sueltes el botoooon')
//     }
// })