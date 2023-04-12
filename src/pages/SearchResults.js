import ListOfGifs from "../components/ListOfGifs"
import { useGifs } from '../Hooks/useGifs'

export default function SearchResults ({ params }) {
    const {keyword} = params
    const { gifs } = useGifs({ keyword })
  
    return (
        <>
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
        </>
    )
}