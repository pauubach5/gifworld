import { useState } from "react"
import { useLocation } from 'wouter'
import ListOfGifs from "../components/ListOfGifs"
import { useGifs } from "../Hooks/useGifs"
import TrendingSearches from "../components/TrendingSearches"

export default function Home() {
    
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { gifs } = useGifs()
    const handleSubmit = e => {
        e.preventDefault()
        //Navigate to another route
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder="Search a gif here..." value={keyword} />
                <button>Search</button>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Last Search</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches
                    />
                </div>
            </div>
 
        </>
    )
}