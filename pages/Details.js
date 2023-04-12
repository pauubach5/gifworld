import { useContext } from "react"
import Gif from "../components/Gif"
import GifsContext from '../Hooks/GifsContext'
import './Details.css'

export default function Details ({ params }) {
    const {gifs} = useContext(GifsContext)
    
    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
        </>
}