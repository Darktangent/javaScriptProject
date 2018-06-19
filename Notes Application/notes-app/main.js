//DOM Document Object Model
//Query and remove
// const para = document.querySelector('p')
// para.remove()

//Query and remove all

const notes = getSavedNotes()

// const ps= document.querySelectorAll('p')

// ps.forEach(function(ps){

//     ps.textContent='********'

//     console.log(ps.textContent)
//     // ps.remove()
// })
// //add a new element
// //update content and insert the element

// const newPara=document.createElement('p')

// newPara.textContent= "This is a new element from JS"

// document.querySelector('body').appendChild(newPara)


const filters = {

    searchText : ''

}

// // localStorage.setItem('location','maryland')

// // console.log(localStorage.getItem('location'))

// // localStorage.removeItem('location')

// localStorage.clear()


//converting object to json string so that we can use localStorage
// const user = {

//     name:'andrew',
//     age:27
// }
//user JSON.stringify() before writing in local storage
// const userJson = JSON.stringify(user)
// console.log(userJson)
// localStorage.setItem('user',userJson)
//getting item from the localstorage and parsing them back to object so that we have access to methods
// const userJson = localStorage.getItem('user')
// const user = JSON.parse(userJson)
// console.log(`${user.name} is ${user.age}`)






renderNotes(notes, filters)





document.querySelector('#create-note').addEventListener('click',function(e)
{
    const id = uuidv4()
    notes.push({
        id: id,
        title : '',
        body : '',
        


    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
    // localStorage.setItem('notes', JSON.stringify(notes))
    // renderNotes(notes,filters)
})

document.querySelector("#search-text").addEventListener('input',function(e){

    console.log(e.target.value)
    filters.searchText=e.target.value
    renderNotes(notes,filters)
})

// document.querySelector('#for-fun').addEventListener('change', function (e){

//     console.log(e.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change',function(e){

    console.log(e.target.value)

})


















    // document.querySelector('#name-form').addEventListener('submit', function(e){

    //     e.preventDefault()
    //     console.log(e.target.elements.firstName.value)
    //     e.target.elements.firstName.value=''


    // })




// document.querySelector('#remove-all').addEventListener('click',function(){
//     //console.log('delete all notes')
//     console.log('test')
//     document.querySelectorAll(".note").forEach(function(note){
//         note.remove()
//     })
// })