// Day 30 - Mini Project: Todo App

// Build a complete Todo App using everything you've learned in 30 days.
// Requirements:

// 1. Create a todo array that stores objects: { id: number, task: string, completed: boolean }
const defaultTodos = [
    { id: 1, task: "Practice Maths", completed: true },
    { id: 2, task: "Solve Numericals", completed: false }
];

let todoArray = [];
try {
    todoArray = JSON.parse(localStorage.getItem("todos")) || [...defaultTodos];
} catch (error) {
    todoArray = [...defaultTodos];
}

// Bonus: helper to save todos to localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todoArray));
}

// 2. Function addTodo(task) - adds a new todo to the array.
function getNextId() {
    return todoArray.length ? Math.max(...todoArray.map(todo => todo.id)) + 1 : 1;
}
function addTodo(task){
    const newTask={id:getNextId(),task,completed:false};
    todoArray.push(newTask);
    saveTodos();
}

// 3. Function removeTodo(id) - removes a todo by id
function removeTodo(id){
    todoArray=todoArray.filter(todo => todo.id !== id);
    saveTodos();
}

// 4. Function toggleTodo(id) - toggles the completed status
function toggleTodo(id){
    todoArray=todoArray.map(todo=>todo.id===id ? {...todo,completed:!todo.completed}: todo);
    saveTodos();
}

// 5. Function updateTodo(id, newTask) - updates the task text
function updateTodo(id,newTask){
    todoArray=todoArray.map(todo=> todo.id=== id ? {...todo,task:newTask}:todo)
    saveTodos();
}

// 6. Function getAllTodos() - returns all todos
function getAllTodos(){
    return todoArray;
}

// 7. Function getCompletedTodos() - returns only completed todos
function getCompletedTodos(){
    return todoArray.filter(todo=>todo.completed);
}

// 8. Function getPendingTodos() - returns only pending (not completed) todos
function getPendingTodos(){
    return todoArray.filter(todo=>!todo.completed);
}

// 9. Function clearCompleted() - removes all completed todos
function clearCompleted(){
    todoArray=todoArray.filter(todo=>!todo.completed);
    saveTodos();
}

// 10. Function countTodos() - returns { total: number, completed: number, pending: number }
function countTodos(){
    const completed=todoArray.filter(t=>t.completed).length;
    return {total:todoArray.length,completed,pending:todoArray.length-completed};
}


// Tests - call each function and print results
addTodo('learn coding');
console.log('After addTodo:', getAllTodos());
removeTodo(2);
console.log('After removeTodo:', getAllTodos());
toggleTodo(1);
console.log('After toggleTodo:', getAllTodos());
updateTodo(1, 'Practice Physics');
console.log('After updateTodo:', getAllTodos());
console.log('getCompletedTodos:', getCompletedTodos());
console.log('getPendingTodos:', getPendingTodos());
console.log('countTodos:', countTodos());
clearCompleted();
console.log('After clearCompleted:', getAllTodos());