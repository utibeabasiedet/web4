// // const h = document.getElementById('h')
// // const classH = document.getElementsByClassName('h')
// // const tagF = document.getElementsByTagName('h1');

// // const h = document.querySelector('div')
// // // const classH = document.getElementsByClassName('h')
// // // const tagF = document.getElementsByTagName('h1');
// // const links = document.querySelectorAll('ul li a')
// // for(let link of links){
// //     console.log(link.href)
// // }

// // const img = document.querySelector("img")
// // img.setAttribute('src', 'https://images.unsplash.com/photo-1710390916960-3047fcdf561e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8          ')
// // // h.setAttribute('class', ' box')
// // // h.setAttribute('class', ' f')

// // console.log(img.getAttribute('id'))
// const btn = document.querySelector('.btn')
// const h1 = document.querySelector('h1')
// const input = document.querySelector('.input')
// const ul = document.querySelector('.ul')
// const form= document.querySelector('#shelter')
// // btn.onclick = ()=>{
// //     alert("how far bro")
// // }

// const lile = ()=>{
//     const r = Math.floor(Math.random()*255)
//     const g = Math.floor(Math.random()*255)
//     const b = Math.floor(Math.random()*255)
//     const newColor = `rgb(${r},${g},${b})`
//     document.body.style.backgroundColor=newColor
// }
// // btn.addEventListener('click', lile )
// btn.addEventListener('click', (e)=>{
//         console.log(e)
// } )
// input.addEventListener('keypress', (e)=>{
//     console.log(e.key  )
//     console.log(e.code)
// } )

// // window.addEventListener('keydown', (e)=>{
// //     if(e.code == 'ArrowUp'){
// //         console.log('move up')
// //     }else if(e.code == 'ArrowDown'){
// //         console.log('move Down')
// //     }else if(e.code == 'ArrowLeft'){
// //         console.log('move Left')
// //     }else if(e.code == 'ArrowRight'){
// //         console.log('move Right')
// //     }
// // })

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const numbers = input.value;
//     const newLi = document.createElement('li');
//     newLi.innerText = numbers;
//     ul.append(newLi);
    
// })

