import giphyApi from "./bases/11-axios";



const getImages = async () => {
    try {
        
        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original

        const image = document.createElement('img');
        image.src = url
        document.body.append(image)

    } catch (error) {
        console.log('Error en la peticion', error);
        throw error
    }
}



getImages()