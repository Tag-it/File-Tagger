'use-strict'

let button = document.getElementById('button');
let getAll = document.getElementById('getall');
let delimage = document.getElementById('delete')
let getOne = document.getElementById('getone')
let update = document.getElementById('update')

delimage.addEventListener('click', (ev) => {
    console.log('delete was fired')
    fetch('http://localhost:3000/image/5b2d8fcc1dea8607d7f44260', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => console.log(data))
})

getOne.addEventListener('click', (ev) => {
    console.log('get all was fired')
    fetch('http://localhost:3000/image/zoo')
        .then(data => data.json())
        .then(data => console.log(data))
})

getAll.addEventListener('click', (ev) => {
    console.log('get all was fired')
    fetch('http://localhost:3000/image')
        .then(data => data.json())
        .then(data => console.log(data))
})

update.addEventListener('click', (ev) => {
    console.log('buttonfired')
    fetch('http://localhost:3000/image/5b2d9c9180ff2d0b97e76be0', {
        method: 'PUT',
        body: JSON.stringify({
            imageURL: 'www.myimage.com',
            comment: 'here are the new image comments',
            tags: ['beach', 'sky', 'water']

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
        .then(data => {
            console.log(data)
        })
})


button.addEventListener('click', (ev) => {
    console.log('buttonfired')
    fetch('http://localhost:3000/image', {
        method: 'POST',
        body: JSON.stringify({
            imageURL: 'www.myimage.com',
            comment: 'here are the image comments',
            tags: ['zoo', 'tiger']

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
        .then(data => {
            console.log(data)
        })
})