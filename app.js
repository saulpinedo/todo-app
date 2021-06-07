// Selector
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')

// ArrowsFunctions
// const addTodoArrow=(event)=>{
//     console.log('hola desde arrow')
//     event.preventDefault()
// }

// Event Listeners
todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click",clicketButton)

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
    }
    if(tag.classList[0]==="complete-btn"){
        const todo=tag.parentElement;
        todo.classList.toggle("completed")
    }

}