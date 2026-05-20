let input = document.querySelector('#inputTarea')
let btn = document.querySelector("#btnTarea")
let tareas = document.querySelector('#tareas')


//Agregando elementos al div
btn.addEventListener('click', (event) => {


    //Dibujando Div de tarea
    let div = document.createElement('div')
    div.className = 'd-flex w-50 justify-content-evenly align-items-baseline'


    //dibujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList = 'me-2'


    //dibujando el label
    let label = document.createElement('label')
    //pendiente: insertar el texto en el label

    checkbox.addEventListener('click', (event) => {

        label.classList.toggle('text-decoration-line-through')

    })


    //dibujar el sup
    let sup = document.createElement('sup')
    sup.textContent = 'X'

    label.textContent = input.value //aqui se inserto el texto que estaba pendiente

    div.append(checkbox)
    div.append(label)
    div.append(sup)
    input.value = ''
    tareas.append(div)


    sup.addEventListener('click', (event) => {
        div.remove(checkbox, label, sup)
    })

})


