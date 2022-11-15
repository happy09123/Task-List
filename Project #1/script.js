const clearBtn = document.querySelector('.clear-tasks')
const form = document.querySelector('form');
const taskInput = document.getElementById('task')
let deleteItems = document.querySelectorAll('.delete-item')
const ul = document.querySelector('ul.collection')
taskInput.value = '';

// Event Handler
const runEvent = (e) => {
    e.preventDefault()
    console.log(`EVENT TYPE: ${e.type}`)

    // Get input value
    // console.log(taskInput.value)
}

// Deleting one list item 
// (NOT RECOMMENDED TO USE THIS)
// document.body.addEventListener('click', function(e) {
//     e.preventDefault()
//     if (e.target.parentElement.classList.contains('delete-item')) {     
//         e.target.parentElement.parentElement.remove()
//     }
// })
const removeTask = () => {
    for (let i = 0; i < deleteItems.length; i++) {
        deleteItems[i].addEventListener('click', function(e) {
            e.target.parentElement.parentElement.remove()
        })
    }
}
removeTask()

// Clearing all the tasks
clearBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].remove()
    }
})

// Adding a new element
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value === '' ? 'New Task' : taskInput.value))
    
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    document.querySelector('ul.collection').appendChild(li)
    deleteItems = document.querySelectorAll('.delete-item')
    removeTask()
})
