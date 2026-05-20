//forna antigua

let parrafo = document.getElementById('madre')
let otroParrafo = document.getElementsByClassName('text-info')
let parrafos = document.getElementsByTagName('p')

console.log(parrafo)
console.log(otroParrafo[0])
console.log(parrafos)


let parrafo1 = document.querySelector('#madre')
let otroParrafo1 = document.querySelectorAll('.text-info')

otroParrafo1.forEach(element => element.classList.add('fw-bold'));

//otroParrafo1.classList.add('fw-bold')
//otroParrafo1.className = 'fw-bold'

console.log(parrafo1)
console.log(otroParrafo1)

//Seleccionar el DIV

let divPrimario = document.querySelector('.bg-danger')
let parrafoNuevo = document.createElement('p')
parrafoNuevo.textContent='Hola Daniel'

//divPrimario.append(parrafoNuevo)

divPrimario.appendChild(parrafoNuevo)

//divPrimario.prepend('Hola, yo soy prepend')
//divPrimario.before('Hola, yo soy before')


//"beforebegin" => antes del elemento
//"afterbegin" => dentro, al inicio
//"beforeend" => dentro, al final
//"afterend" => despues del elemento


divPrimario.insertAdjacentElement('afterbegin', parrafoNuevo)
divPrimario.insertAdjacentHTML('afterbegin', '<p>Holaaaaaaaaaa</p>')
divPrimario.insertAdjacentText('beforeend', '<p>Holaaaaaa</p>')
console.log(divPrimario)


//parrafoNuevo.remove()

//divPrimario.removeChild(parrafoNuevo)

parrafoNuevo.textContent += ' Bueno, vaya '
parrafoNuevo.innerText += ' Fus dus '


parrafoNuevo.innerHTML += "<p>Queridaaaaaaaaaaaa</p>"


let parrafoAEditar = document.querySelector('.text-info')
parrafoAEditar.setAttribute('name', 'El parrafo')
parrafoAEditar.setAttribute('title', 'Aqui esta el titulo')


console.log(parrafoAEditar.getAttribute('name'))