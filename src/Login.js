import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className='login_logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
            />
            </Link>

            <div className="login_container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text'/>

                <h5>Password</h5>
                <input type='password'/>

                <button className='login_singInButton'>Sing In</button>

                <p>
                    By signing-in you agree to the AMOZON FAKE 
                    CLONE Conditions of the Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button 
                className='login_registerButton'
                >Create your Amozon Account</button>
            </form>

            </div>
        </div>
    )
}

export default Login
