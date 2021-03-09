import React from 'react'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'
import {useDispatch} from 'react-redux'
import { Button } from '@material-ui/core'

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then (({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }))
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img alt='vijay' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1ceH1FKXF87VDaaSQIWK_oqJTC8hmeDHRSSUYY6qRQfGNrgnxotwSv5_dDrgoxZJgT4&usqp=CAU' />
                <Button variant='contained' color='black' onClick={signIn} className='login__button'>Login</Button>
            </div>
        </div>
    )
}

export default Login
