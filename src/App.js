import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Loading from './Components/Loading/Loading';
import { AppContext, AppProvider } from "./Context";
import PreSignUp from './Components/SignUp/PreSignUp';
import SignUp from './Components/SignUp/SignUp';
import HomePage from './Components/HomePage/HomePage';
import Emergency from './Components/Emergency/Emergency';
import Hospitals from './Components/Hospitals/Hospitals';
import Shop from "./Shop/Shop";
import Friends from './Friends/Friends';



function App() {

  return (


    <AppProvider>


      <BrowserRouter>
        <Switch>
          <Route exact path="/presignup">
            <PreSignUp />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/emergency">
            <Emergency />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Loading />
          </Route>
          <Route exact path="/hospitals">
            <Hospitals />
          </Route>
          <Route exact path="/*">
            <Redirect to="/home" />
          </Route>

        </Switch>
      </BrowserRouter>


    </AppProvider>

  );
}

export default App;
