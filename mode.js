const body = document.querySelector(`body`)
const Light = document.getElementById(`lightBtn`)
const dark = document.getElementById(`darkBtn`)

const local = localStorage.getItem(`m`)

if(local) {
    body.classList.add(`darkMode`)
    dark.classList.toggle(`hidden`)
    Light.classList.toggle(`hidden`)
}

function change() {
    body.classList.toggle(`darkMode`)
    dark.classList.toggle(`hidden`)
    Light.classList.toggle(`hidden`)
}


dark.addEventListener(`click`, ()=>{
    change()
    localStorage.setItem(`m`,`m`)
})

Light.addEventListener(`click`, ()=>{
    change()
    localStorage.setItem(`m`, ``)
})
