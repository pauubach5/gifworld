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
        <Route component={Main} path='/gifworld' />
        <GifsContextProvider>
          <Route component={Home} path='/home' />
          <Route component={SearchResults} path='/search/:keyword' />
          <Route component={Details} path='/gif/:id' /> 
        </GifsContextProvider>
      </section>
    </div>
  );
}  

