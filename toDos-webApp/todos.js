
  const todos = [

    {text :"Set Alarm",status : true}
    , { text:"Wake up", status:true}, 
    {text:"Drink Water",status:false}, 
    {text:"Workout",status:false},
    {text:"Start Coding",status:false}


  ]



//Select all p tags
// const para = document.querySelectorAll('p')

// para.forEach(function(para){
//     if(para.textContent.includes('teeth')){

//         para.remove()
//     }

    

// })

// Print the number of todos that are not completed example- you have # of things to do
// add a p foreach todos above (use text value)

const thingsNotDone = todos.filter(function(){
    return !todos.status
})

const summary = document.createElement('h2')
summary.textContent =`You have ${thingsNotDone.length} things are not completed`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todos){
    const newPara = document.createElement('p')
    newPara.textContent = todos.text
    document.querySelector('body').appendChild(newPara)
})

document.querySelector('button').addEventListener('click',function(e){

    e.target.textContent='Why would you do such an awful thing'
    console.log('Success')
})