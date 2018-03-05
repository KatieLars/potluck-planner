import React from 'react';
import { Route } from 'react-router';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'

const Routes = () => {
  return(
    <Route path="/signin" component={SignIn} />
    <Route path="/about" component={About}/>
    <Route exact path="/" component={Home}/>
    <Route path="/home" component={UserHomePage}/>
)};

export default Routes
