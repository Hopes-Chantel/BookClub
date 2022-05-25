import React, {useEffect, useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Books from '../../components/Books/Books';
import ProfilePage from '../ProfilePage/ProfilePage';
import NotesList from '../../components/NotesList/NotesList';
import {nanoid} from 'nanoid'



function App() {

  const [notes, setNotes] =useState([]);


  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);
  
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',
     JSON.stringify(notes))
  }, [notes]);
  // save our notes to local storage
  // whenever notes get updated this function will be triggered





const addNote =(text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      //generates new id
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes =[...notes, newNote];
    setNotes(newNotes);
    //causes components to re render

};
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
};


  // since we will be updating our notes they will be in an array 
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
         
          <Route path="/" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} 
           />
          <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} 
           />
            <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout}  />}
             />
          <Route path="/notes" element={<NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>}/>
    
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

