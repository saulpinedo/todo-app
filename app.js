// Selector
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
const filterOption=document.querySelector('.filter-todo')

// ArrowsFunctions
// const addTodoArrow=(event)=>{
//     console.log('hola desde arrow')
//     event.preventDefault()
// }

// Event Listeners
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click",clicketButton)
filterOption.addEventListener("click",filterTodo)

//Function
function addTodo(event){
    event.preventDefault()

    // Create DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-div')

    // Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)
    
    // Create MARK BUTTON
    const completeButton = document.createElement('button')
    completeButton.innerHTML = ' <i class="fas fa-check"></i> '
    completeButton.classList.add('complete-btn')

    todoDiv.appendChild(completeButton)

    // Create TRASH BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = ' <i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')

    todoDiv.appendChild(trashButton)

    // Append TO LIST
    todoList.appendChild(todoDiv)

    // Add todos to LocalStorage
    saveLocalTodos(todoInput.value)

    // Todo CLEAR IMPUT VALUE
    todoInput.value=''
}

function clicketButton(e){
    const tag=e.target

    if(tag.classList[0]==="trash-btn"){
        const todo=tag.parentElement;
        todo.classList.add('fall')
        // DELETE ANIMATION
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
        deleteLocalTodos(todo)
    }
    if(tag.classList[0]==="complete-btn"){
        const todo=tag.parentElement;
        todo.classList.toggle("completed")
    }

}

function filterTodo(e){
    const todos=todoList.childNodes
   
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display='flex'
                break;

            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex"
                }else{
                    todo.style.display="none"
                }
                break;
                
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex"
                }else{
                    todo.style.display="none"
                }
        }
    })
}

function saveLocalTodos(todo){
    //check if i already have things to do
    let todos
    if(localStorage.getItem('todos')===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}

function getTodos(){
    console.log('entra a obtener todos')
    let todos
    if(localStorage.getItem('todos')===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
    
    //                          CREATE TODOS AGAIN
    // Create DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-div')

    // Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)
    
    // Create MARK BUTTON
    const completeButton = document.createElement('button')
    completeButton.innerHTML = ' <i class="fas fa-check"></i> '
    completeButton.classList.add('complete-btn')

    todoDiv.appendChild(completeButton)

    // Create TRASH BUTTON
    const trashButton = document.createElement('button')
    trashButton.innerHTML = ' <i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')

    todoDiv.appendChild(trashButton)

    // Append TO LIST
    todoList.appendChild(todoDiv)

    })
}

function deleteLocalTodos(todo){
    let todos=[]

    if (localStorage.getItem('todos')===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }

    let getTODO= todo.children[0].innerText
    let getIndex=todos.indexOf(getTODO)
    console.log(getTODO)
    console.log(getIndex)

    todos.splice(getIndex,1)
    localStorage.setItem('todos',JSON.stringify(todos))

    
    
    

}