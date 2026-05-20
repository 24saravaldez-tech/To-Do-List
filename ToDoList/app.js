const data = [
    { id: 1, texto: 'Ganar en Among us', estaCompletada: true },
    { id: 2, texto: 'Terminar la partida', estaCompletada: false }

]

let input = document.querySelector('#inputTarea')
let btn = document.querySelector("#btnTarea")
let tareas = document.querySelector('#tareas')

if (data.length > 0) {

    for (let i = 0; i <= data.length - 1; i++) {

        //Dibujando Div de tarea
        let div = document.createElement('div')
        div.className = 'd-flex w-50 justify-content-evenly align-items-baseline'


        //dibujando checkbox
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', data[i].id)

        checkbox.classList = 'me-2'


        //dibujando el label
        let label = document.createElement('label')
        //pendiente: insertar el texto en el label

        if (data[i].estaCompletada) {
            checkbox.checked = true;
            label.classList.add('text-decoration-line-through')
        } else {
            checkbox.checked = false;
            label.classList.remove('text-decoration-line-through')
        }

        checkbox.addEventListener('click', (event) => {
            //console.log(event.target.id)
            let tareaABuscar = data.find(item => item.id == event.target.id)
            tareaABuscar.estaCompletada = !tareaABuscar.estaCompletada

            if (tareaABuscar.estaCompletada) {
                label.classList.add('text-decoration-line-through')
            }else{
                label.classList.remove('text-decoration-line-through')
            }
        })


        //dibujar el sup
        let sup = document.createElement('sup')
        sup.textContent = 'X'

        label.textContent = data[i].texto

        div.append(checkbox)
        div.append(label)
        div.append(sup)
        //  input.value = ''
        tareas.append(div)

        sup.addEventListener('click', (event) => {
            div.remove(checkbox, label, sup)
        })

    }
}




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

    data.push({ id: data.length + 1, texto: input.value, estaCompletada: false })

    input.value = ''
    tareas.append(div)

    sup.addEventListener('click', (event) => {
        div.remove(checkbox, label, sup)
    })

})

