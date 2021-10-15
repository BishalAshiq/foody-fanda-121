import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import icon from '../../images/logos/logo2.png'
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, logOut } = useFirebase();
    return (
        <div className='header'>
            <div>
             <img src={icon} alt=""/>
             
            </div>

            <div>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link id='sign' to="/sign">Sign Up</Link> 
            <span style={{fontWeight:'bold'}}>{user.displayName} </span>
           {user?.email && <button id='logOut' onClick={logOut}>Log Out</button>}
            </div>
        </div>
    );
};

export default Header;