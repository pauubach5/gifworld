import getTrendingTerms from "../services/getTrendingSearchTerms"
import { useState, useEffect } from "react"
import Category from "./Category"
//Working with Intersection Observer, it allows us to charge the Trending section ONLY WHEN its visible to the viewport.
function TrendingSearches() {
    const [trends, setTrends] = useState([])
    
    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Trending' options={trends} />
}

export default function LazyTrending() {
    const [show, setShow] = useState(false)

    useEffect(function () {
        const onChange = (entries) => {
            //Entries es un array
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById('LazyTrending'))
    })

    return <div id='LazyTrending'>
        {show ? <TrendingSearches /> : null }
    </div>
}