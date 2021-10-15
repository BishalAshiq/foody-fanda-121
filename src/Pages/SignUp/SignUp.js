import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h2>Please Sign Up! </h2>
            <from>
                <input type="email" placeholder="Enter your Email"/> <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <input type="submit" value="Submit"/>
            </from> 
            <br/>
            <Link to="/login">Already have an account?</Link>
        </div>
    );
};

export default SignUp;