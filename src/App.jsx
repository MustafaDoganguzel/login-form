import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Products from './components/Products';
// import SideBar from './components/SideBar';
// import './App.css';
// import './components/Layout.css';
// import ErrorPage from './components/ErrorPage';
import Success from './Components/Success';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>

    </>

  )
}
export default App;