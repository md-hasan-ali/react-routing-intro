import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
// import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Nav from './components/Nav/Nav';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Content from './components/Content/Content';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path='/header'>
            <Header></Header>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/'>
            <Content></Content>
          </Route>
          <Route path='/notpage'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
