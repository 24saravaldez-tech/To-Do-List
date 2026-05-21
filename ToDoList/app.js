let data = []

if (JSON.parse(localStorage.getItem('data'))) {
    data = JSON.parse(localStorage.getItem('data'))
} else {
    localStorage.setItem('data', JSON.stringify([]))
}

let input = document.querySelector('#inputTarea')
let btn = document.querySelector("#btnTarea")
let tareas = document.querySelector('#tareas')


//localStorage.getItem() //permite traer la informacion
//localStorage.setItem() //permite ingresar la indomracion



const getNextId = () => {
    return data.length > 0 ? data[data.length - 1].id + 1 : 1
}



const dibujarElementos = (info = null, i = null) => {
    //Dibujando Div de tarea
    let div = document.createElement('div')
    div.className = 'd-flex w-50 justify-content-evenly align-items-baseline'


    //dibujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'me-2 checkbox'

    //dibujando el label
    let label = document.createElement('label')

    //dibujar el sup
    let sup = document.createElement('sup')
    sup.className = 'eliminar'
    sup.textContent = 'X'


    if (info == null || i == null) {
        checkbox.setAttribute('id', getNextId())
        sup.setAttribute('id', getNextId())
        label.textContent = input.value
    } else {
        checkbox.setAttribute('id', info[i].id)
        label.textContent = info[i].texto
        sup.setAttribute('id', info[i].id)
    }

    div.append(checkbox)
    div.append(label)
    div.append(sup)

    return { div, checkbox, label, sup }

}


const dibujarTodo = () => {

    if (data.length > 0) {

        for (let i = 0; i <= data.length - 1; i++) {

            const { div, checkbox, label, sup } = dibujarElementos(data, i);

            if (data[i].estaCompletada) {
                checkbox.checked = true;
                label.classList.add('text-decoration-line-through')
            } else {
                checkbox.checked = false;
                label.classList.remove('text-decoration-line-through')
            }

            tareas.append(div)
        }

    }
}

btn.addEventListener('click', (event) => {

    data.push({ id: getNextId(), texto: input.value, estaCompletada: false })

    localStorage.setItem('data', JSON.stringify(data))

    tareas.innerHTML = ''
    dibujarTodo();
    input.value = ''


})

input.addEventListener('keyup', (event) => {

    let key = event.key

    if (key == 'Enter') {
        data.push({ id: data.length + 1, texto: input.value, estaCompletada: false })

        tareas.innerHTML = ''
        dibujarTodo();

        input.value = ''
    }

    localStorage.setItem('data', JSON.stringify(data))
})


tareas.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        let tareaABuscar = data.find(item => item.id == event.target.id)
        tareaABuscar.estaCompletada = !tareaABuscar.estaCompletada

        if (tareaABuscar.estaCompletada) {
            event.target.nextSibling.classList.add('text-decoration-line-through')
        } else {
            event.target.nextSibling.classList.remove('text-decoration-line-through')
        }
    } else if (event.target.classList.contains('eliminar')) {
        event.target.parentElement.remove()
        data = data.filter(item => item.id != event.target.id)
    }
})


dibujarTodo()


