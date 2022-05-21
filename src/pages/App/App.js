import React, {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Books from '../../components/Books/Books';
import ProfilePage from '../ProfilePage/ProfilePage';

function App() {

  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if(user) { // is the user logged in
  return (

      <Routes>
          <Route path="/allbooks" element={<Books/>} 
           />
          <Route path="/"  element={<Header user={user} handleLogout={handleLogout} />}
           />
          <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} 
           />
          <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} 
           />
            <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout}  />}
             />
      </Routes>
  );
}
return (
  <Routes>
    <Route
      path="/login"
      element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
    />
    <Route
      path="/signup"
      element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
    />
    <Route path="/*" element={<Navigate to="/login" />} />
  </Routes>
);
}
export default App;

