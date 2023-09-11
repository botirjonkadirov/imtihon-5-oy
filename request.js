const overlay = document.getElementById(`overlay`)

const load = (lod)=>{
    if (lod) {
        overlay.classList.remove(`hidden`)
    } else {
        overlay.classList.add(`hidden`)
    }
}

async function getData(url) {
    load(true)
    if (url){
        const req = await fetch(url)
        load(false)
        if(!req.ok) {
            load(false)
            throw new Error(`something is wrong`)
        }
        const data = await req.json()
        return data;
    } else {
        throw new Error(`url is wrong`)
    }
} 


export default getData

