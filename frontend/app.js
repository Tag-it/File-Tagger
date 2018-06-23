'use-strict'

let button = document.getElementById('button');
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