//Custom Hook
import { useEffect, useContext } from "react"
import getGifs from "../services/getGifs"
import GifsContext from "./GifsContext"

export function useGifs({ keyword } = {keyword: null}) {
    const { gifs, setGifs } = useContext(GifsContext)
    
    useEffect(() => {
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'   
        
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                localStorage.setItem('lastKeyword', keyword)

            })
    }, [keyword, setGifs])

    return { gifs }    
}