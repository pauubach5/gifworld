export const API_KEY = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'

export default function getGifs ({keyword} = {}) {

    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`

    return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if(Array.isArray(data)) {
        const gifs = data.map(image => {
          const {images, title, id} = image
          const { url } = images.downsized_medium
          return {title, url, id}
        })
        return gifs
      }
      return []
    })  
}