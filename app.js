import getData from "./request.js"
const ul = document.getElementById(`ul`)
const form = document.getElementById(`form`)



const api= `https://countries-api-v7sn.onrender.com/countries?limit=250`

 const upDate =(data)=>{
   
   ul.innerHTML=``
   console.log(data)
   data.data.forEach((e)=>{
      // console.log(e)
      const {flags,region,name,population,capital } = e
      ul.innerHTML+= `
      
      <li class="list">
      <img src=${flags.png} alt="flag" width="264" height="160">
      <h3 class ="govern">${name.common}</h3>
      <p>Population: ${population}</p>
      <p class="region">Region: ${region}</p>
      <p>Capital: ${capital}</p>
      </li>
      
      
      `
    

   })
  
}

getData(api)
.then((data)=>{
return data
}).then((d)=>{
   upDate(d)
})

.catch((error)=>console.log(error))




// console.log(form[`form__input`])
form[`form__input`].addEventListener(`input`, (e)=>{
   e.preventDefault()
   const s = form[`form__input`].value.toLowerCase()
   const put = document.querySelectorAll(`.govern`)
   console.log(put)
   put.forEach((e)=>{
      if (e.textContent.toLowerCase().includes(s)){
         e.parentElement.classList.remove(`hidden`)

      } else {
         e.parentElement.classList.add(`hidden`)
      }

   })
})



const select = document.getElementById(`selection`)
select.addEventListener(`change`, (e)=>{
  const reg = select.value
  getData(`https://countries-api-v7sn.onrender.com/countries?region=${reg}`)
   .then((data) => upDate(data))
})

// function single() {
//    const single = document.querySelectorAll(`.list`)
// single.addEventListener(`click`, (e)=>{
//    console.log(e.target)
//    // upDate(`https://countries-api-v7sn.onrender.com/countries/slug/${country}`)
// })

// }

document.addEventListener(`click`,(e)=>{
   e.target.parentElement.forEach((e)=>{
      
      console.log(e.h3)
   })
   // ul.innerHTML=``

   console.log(e.target)
})


  




