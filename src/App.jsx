import './App.css';
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home message="Home component"></Home>
          </Route>
          <Route path="/about">
            <About aboutMessage="About component"></About>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/post/:id" component={Post}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
