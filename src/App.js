import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import Content from './components/Content/Content';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
// import Nav from './components/Nav/Nav';
import NotFound from './components/NotFound/NotFound';


function App() {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  }
  return (
    <div className="App">
      <Router>
        <NavLink activeStyle={activeStyle} to="/friends">friends</NavLink>
        <NavLink activeStyle={activeStyle} to="/header">header</NavLink>
        <NavLink activeStyle={activeStyle} to="/about">about</NavLink>

        <Switch>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>

          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>

          <Route path='/content'>
            <Content></Content>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/header'>
            <Header></Header>
          </Route>

          <Route exact path='/'>
            <Header></Header>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
