//navbar
import React from 'react';
import { AuthContext } from '@/context/AuthContext';
import signOutUser from '@/firebase/auth/signout';
import './navbar.css';

function Navbar() {
  const { user } = React.useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/">Logo</a>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {user ? (
              <li>
                <a href="/admin">Admin</a>
              </li>
            ) : null}
            {user ? (
              <li>
                <button onClick={signOutUser}>Sign out</button>
              </li>
            ) : (
              <li>
                <a href="/signin">Sign in</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
