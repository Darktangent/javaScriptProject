// create an array with todos
// print message d=saying-
// you have x todos where x is the length of the array
//convert the array to an array of object with properties=>text,status
  const todos = [

    {text :"Set Alarm",status : "completed"}
    , { text:"Wake up", status:"completed"}, 
    {text:"Drink Water",status:"incomplete"}, 
    {text:"Workout",status:"incomplete"},
    {text:"Start Coding",status:"incomplete"}


  ]
//create a function removeTodo by text value

  const deleteTodo = function(array,text){
    const matchIndex = array.findIndex(function(todo,i){
      return todo.text.toLowerCase()===text.toLowerCase()

    })
    return (todos.splice(matchIndex,1))
  }

deleteTodo(todos,'Drink Water')
console.log(todos)

// create a function to show the todos thats not completed

const getThingsToDos = function(todos){
  const filterStatus=todos.filter(function(todo){
    return todo.status
  

  })
  return filterStatus
}
console.log(getThingsToDos(todos))


//delete the 3rd item
//add a new item on to the end
//remove the first item from the list

// console.log ("You have " + todos.length + "todos, where " + todos.length + " is the length of the array ")
// console.log(`Number 1 Todos: ${todos[0]} `)
// console.log (`Second to last one : ${todos[todos.length-2]}`)
// //to delete the 3rd item lets use splice
// console.log(todos.splice(2,1))
// console.log(todos)
// // adding a new item to the end
// console.log(todos.push("Restore 2nd computer"))
// console.log(todos)
// //remove the 1st item we will use splice again. we could also use shift() to remove the first item i.e 0 index
// console.log(todos.splice(0,1))
// console.log(todos)
// //print items along with their index
// // to do the same looping using for - we can do the following
// // for(count=0;count<=todos.length;count++){

// //   let item = todos[count]
// //   console.log(`Using for loop-Index: ${count} Item: ${item} `)

// // }

// todos.forEach(function(item, index){
//   console.log(`Index: ${index} Item: ${item}`)

// })




