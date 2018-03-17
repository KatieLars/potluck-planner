import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'
import SignUp from './components/signUp'
import AccountPage from './pages/accountPage'
import UpdateAccountForm from './components/updateAccountForm'
import FriendsPage from './pages/friendsPage'
import AddFriends from './components/addFriends'
import PotlucksPage from './pages/potlucksPage'
import NewPotluckPage from './pages/newPotluckPage'
import NewRecipePage from './pages/newRecipePage'
import PotluckShow from './components/potluckShow'
import GuestList from './components/guestList'
import ListModal from './containers/listModal'
import RecipeModal from './containers/recipeModal'
import RecipesPage from './pages/recipesPage'
import { connect } from 'react-redux'


const checkAuth = (token) => {
  if(!token) {
    return false
  }else{
    return true
  }
}

const PrivateRoute = ({component: Component, token, ...rest}) => {
  return (
  <Route {...rest} render={(props) => {
    checkAuth(token) ? (
      <Component {...props} />
    )
      : (<Redirect to={{pathname: '/signin', state: {from: props.location}}} />)
    }
  }
  />)
}//last brace

class Routes extends Component {


  render() {
    return(
    <div>
    <Navigation />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/about" component={About}/>
      <Route path="/home" component={UserHomePage}/>
      <Route exact path="/account/update" component={UpdateAccountForm}/>
      <Route path="/account" component={AccountPage}/>
      <Route exact path="/friends" component={FriendsPage}/>
      <Route path="/friends/add" component={AddFriends} />
      <Route exact path="/potlucks" component={PotlucksPage}/>
      <Route path="/potlucks/new" component={NewPotluckPage} />
      <Route exact path="/recipes" component={RecipesPage}/>
      <Route path="/recipes/new" component={NewRecipePage}/>
      <Route path="/recipes/:recipeId/edit" component={RecipeModal}/>
      <Route exact path="/potlucks/:id" component={PotluckShow}/>
      <Route path="/potlucks/:id/guests/select" component={ListModal}/>
      <Route path="/potlucks/:id/guests/update" component={ListModal}/>
      <Route exact path="/potlucks/:id/guests" component={ListModal}/>
      <Route path="/potlucks/:potluckId/recipes/:recipeId" component={RecipeModal} />
      <Route path="/potlucks/:potluckId/recipes/new" component={RecipeModal}/>
      <Route exact path="/potlucks/:potluckId/recipes/select" component={ListModal}/>
      </Switch>
    </div>
  )}
}

export default Routes


// <PrivateRoute token={sessionStorage.jwt} path="/home" component={UserHomePage}
//   />
