import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/sign">
         <SignUp></SignUp>
        </Route>
        <Route path="/notfound">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
