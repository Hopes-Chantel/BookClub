import React from 'react';
import {Link} from 'react-router-dom';



export default function Header({ user, handleLogout }) {
  
    return(
      <>
    <header align="left">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
<Link className="btn btn-warning" to="" onClick={handleLogout}>
          Logout
        </Link>
        <Link className="btn btn-warning" to="/allbooks">Search Books</Link>
        <Link className="btn btn-warning" to="/notes">My Book Notes</Link>
        </header>
        <div align="center">
      <img src="https://i.ibb.co/DwbJDYB/logo-size.jpg" alt= "header" width="200px"></img>
      <div className="tagline">Reads Well With Others</div>
      </div>
      </>
    )
}




