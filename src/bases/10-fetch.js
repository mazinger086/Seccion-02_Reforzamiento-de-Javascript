


const apiKey = '5bIrA5CGCfUFE7P8FWJez1t14xzWVJAF';

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

fetch(url)
.then(res =>  res.json())
.then(({data}) => {
    const { url } = data.images.original
    
    const img = document.createElement('IMG');
    img.src = url

    document.body.append( img )
})



























// import { heroesByID, getHeroesByOwner } from './bases/08-imp-exp';

// console.log(heroesByID(2));

// console.log(getHeroesByOwner('Marvel'));