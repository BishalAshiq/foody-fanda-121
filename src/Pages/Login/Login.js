import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br/>
            <Link to="/sign">New User?</Link>
        </div>
    );
};

export default Login;