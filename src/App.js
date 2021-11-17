import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Pages/context/AuthProvider";
import PrivateRoute from "./Pages/Shared/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
      <Home></Home>
        </Route>
        <Route path='/home'>
      <Home></Home>
        </Route>
        <Route path='/add/service'>
          <AddService></AddService>
        </Route>
        <Route path='/manage/service'>
          <ManageServices></ManageServices>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/booking/:serviceId'>
          <Booking></Booking>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
