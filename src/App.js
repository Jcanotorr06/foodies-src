import {Route, useLocation, Switch} from 'react-router-dom'
import {Landing, Category, Origin, Search, Recipe, Categories, Origins, Random} from './pages'
import {NavBar} from './components'

function App() {
  const location = useLocation()
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Landing/>
        </Route>
        <Route path="/category/:name">
          <Category/>
        </Route>
        <Route path="/origin/:name">
          <Origin/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/recipe">
          <Recipe/>
        </Route>
        <Route path="/categories">
          <Categories/>
        </Route>
        <Route path="/origins">
          <Origins/>
        </Route>
        <Route path="/random">
          <Random/>
        </Route>
      </Switch>
      <NavBar location={location}/>
      <div className="bg-table bg-cover bg-center h-screen w-screen bg-fixed fixed top-0 z-0 bg"/>
    </div>
  );
}

export default App;
