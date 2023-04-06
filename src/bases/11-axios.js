import axios from 'axios';


const apiKey = '5bIrA5CGCfUFE7P8FWJez1t14xzWVJAF';

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;



const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

giphyApi.get('/random')
    .then( res => {

        const { data } = res.data
        const { url } = data.images.original
            
        const img = document.createElement('IMG');
        img.src = url

        document.body.append( img )

    })
    




















// import { heroesByID, getHeroesByOwner } from './bases/08-imp-exp';

// console.log(heroesByID(2));

// console.log(getHeroesByOwner('Marvel'));