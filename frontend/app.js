'use-strict'

let button = document.getElementById('button');
let getAll = document.getElementById('getall');
let delimage = document.getElementById('delete')

delimage.addEventListener('click', (ev) => {
    console.log('delete was fired')
    fetch('http://localhost:3000/image/5b2d8fcc1dea8607d7f44260', {method:'DELETE', 
    headers:{
        'Content-Type':'application/json'
    }})
    .then(data => data.json())
    .then(data => console.log(data))
})

getAll.addEventListener('click', (ev) =>{
    console.log('get all was fired')
    fetch('http://localhost:3000/image')
    .then(data => data.json())
    .then(data => console.log(data))
})
button.addEventListener('click', (ev) =>{
    console.log('buttonfired')
    fetch('http://localhost:3000/image',{
        method:'POST',
        body: JSON.stringify({
            imageURL:'www.myimage.com',
            comment: 'here are the image comments',
            tags: ['zoo', 'tiger']
        
        }),
        headers:{
            'Content-Type':'application/json'
        }
}).then(data => data.json())
.then(data => {
        console.log(data)
    })
})