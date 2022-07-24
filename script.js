// base_url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id'

// const get_superhero = (id) => {
//   //fetch from base url

//   fetch(`${base_url}/${id}.json`)
//   .then(response => response.json())
//   .then(json => {
//     body = document.querySelector('body')
//     body.innerHTML += `<img src='${json.images.md}' height = 300px width = 230px>`
//   })

// }
// get_superhero(245)

// now we want to place a button over there that will get us tha images randomly


// to fetch object against and object
base_url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id'
base_url_all = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'


const get_superhero = (id) => {
  //fetch from base url

  fetch(`${base_url}/${id}.json`)
  .then(response => response.json())
  .then(json => {
    img_holder = document.getElementById('image-holder')
    img_holder.innerHTML += `<img src = ${json.images.md} height = 300px width = 230px>`
  })
}
img_btn = document.getElementById('img-btn')

img_btn.onclick = () => {
  total_heros = 731
  rand_num = Math.floor(Math.random() * total_heros) + 1
  console.log('Random: ', rand_num)
  get_superhero(rand_num)
}

clear_btn = document.getElementById('clear-btn')
clear_btn.onclick = () => {
  img_holder.innerHTML = ''
}

// search by id
search_content = document.getElementById('search_input')

search_btn = document.getElementById('search-btn')

search_btn.onclick = () => get_superhero(Number(search_content.value))
