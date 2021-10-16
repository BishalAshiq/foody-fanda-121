import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Shipping from './Pages/Shipping/Shipping';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
        <PrivateRoute path="/shipping">
           <Shipping></Shipping>
        </PrivateRoute>
        <PrivateRoute path="/placeorder">
        <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
