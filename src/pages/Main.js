import { Link, Route } from 'wouter'

export default function Main() {
    return (
        <div className="main">
          <Route path="/">
            <h1 className="title-main">GifWorld</h1>
            <h4 className='welcome-content'>Welcome to <span className='highlight-title'>GifWorld</span>, your ultimate destination for <span className='highlight-text'>discovering</span>, <span className='highlight-text'>sharing</span>, and <span className='highlight-text'>enjoying</span> gifs! 😜
              Dive into our vast collection, explore trending gifs, and uncover hidden gems tailored to your interests</h4>
            <Link to='/home'>
              <button className="button-main">
                Start Exploring
              </button>
            </Link>
          </Route>
        </div>
    )
}