import './App.css'
import { Link, Route } from 'wouter'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import { GifsContextProvider } from './Hooks/GifsContext';
import Main from './pages/Main';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/home'><h4 className='highlight-title'>GifWorld</h4></Link>
        <div className="main">
          <Route path="/gifworld">
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
        <GifsContextProvider>
          <Route component={Home} path='/home' />
          <Route component={SearchResults} path='/search/:keyword' />
          <Route component={Details} path='/gif/:id' /> 
        </GifsContextProvider>
      </section>
    </div>
  );
}  

