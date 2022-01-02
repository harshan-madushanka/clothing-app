import React from 'react';

import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/shop' element={<ShopPage/>}></Route>
          <Route path='/signin' element={<SignInAndSignUp/>}></Route>
        </Routes>
      </div>
    );
  }
  
}

export default App;
