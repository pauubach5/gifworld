import { API_KEY } from "./getGifs"

export default function getTrendingTerms () {

  const API_URL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      return data
    })  
}

