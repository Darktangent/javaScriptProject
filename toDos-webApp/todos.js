const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

// // Listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('Add a new todo...')
// })

// // Listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
//create submit handler
    document.querySelector('#todos-input-form').addEventListener('submit',function(e){
        e.preventDefault()
        todos.push({
            text:e.target.elements.todosTextField.value,
            completed : false

        })
        renderTodos(todos,filters)
        e.target.elements.todosTextField.value=''


    })



// const todos = [{
//     text: 'Order cat food',
//     completed: false
// }, {
//     text: 'Clean kitchen',
//     completed: true
// }, {
//     text: 'Buy food',
//     completed: true
// }, {
//     text: 'Do work',
//     completed: false
// }, {
//     text: 'Exercise',
//     completed: true
// }]

// const filters = {
//     searchText: ''
// }

// const renderTodos = function (todos, filters) {
//     const filteredTodos = todos.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     })

//     const incompleteTodos = filteredTodos.filter(function (todo) {
//         return !todo.completed
//     })

//     document.querySelector('#todos').innerHTML = ''

//     const summary = document.createElement('h2')
//     summary.textContent = `You have ${incompleteTodos.length} todos left`
//     document.querySelector('#todos').appendChild(summary)

//     filteredTodos.forEach(function (todo) {
//         const p = document.createElement('p')
//         p.textContent = todo.text
//         document.querySelector('#todos').appendChild(p)
//     })
// }

// renderTodos(todos, filters)

// // Listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('Add a new todo...')
// })

// // Listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderTodos(todos, filters)
// })
// //   const todos = [

// //     {text :"Set Alarm",status : true}
// //     , { text:"Wake up", status:true}, 
// //     {text:"Drink Water",status:false}, 
// //     {text:"Workout",status:false},
// //     {text:"Start Coding",status:false}


// //   ]



// // //Select all p tags
// // // const para = document.querySelectorAll('p')

// // // para.forEach(function(para){
// // //     if(para.textContent.includes('teeth')){

// // //         para.remove()
// // //     }

    

// // // })

// // // Print the number of todos that are not completed example- you have # of things to do
// // // add a p foreach todos above (use text value)

// // const thingsNotDone = todos.filter(function(){
// //     return !todos.status
// // })

// // const summary = document.createElement('h2')
// // summary.textContent =`You have ${thingsNotDone.length} things are not completed`
// // document.querySelector('body').appendChild(summary)

// // todos.forEach(function(todos){
// //     const newPara = document.createElement('p')
// //     newPara.textContent = todos.text
// //     document.querySelector('body').appendChild(newPara)
// // })

// // document.querySelector('button').addEventListener('click',function(e){

// //     e.target.textContent='Why would you do such an awful thing'
// //     console.log('Success')
// // })