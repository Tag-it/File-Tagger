'use-strict'

let button = document.getElementById('button');
let getAll = document.getElementById('getall');
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