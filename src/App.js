import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="home-link">
            Home
          </NavLink>

          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>

          <NavLink to="/characters" data-testid="char-link">
            Characters
          </NavLink>

          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route path="/films">
            <Films />
          </Route>

          <Route path="/characters">
            <Characters />
          </Route>

          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
