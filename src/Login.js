import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(
            error.message
        ))
    }

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
                <input type='text' value={email} onChange ={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>

                <button type='submit' onClick = {signIn}
                className='login_singInButton'>Sing In</button>

                <p>
                    By signing-in you agree to the AMOZON FAKE 
                    CLONE Conditions of the Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button onClick={register}
                className='login_registerButton'
                >Create your Amozon Account</button>
            </form>

            </div>
        </div>
    )
}

export default Login
