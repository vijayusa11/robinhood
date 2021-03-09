import React from 'react'
import Logo from './vijay.png';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import { logout } from './features/userSlice';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
    const dispatch = useDispatch();
    const [user, loading] = useAuthState(auth);
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
      }
  
  
    return (
        <div className='header__wrapper'>
            <div className='header__logo'>
                <img src={Logo} alt='Vijay' />
            </div>
            <div className='header__searchContainer'>
                <SearchIcon className='header__searchIcon' />
                <input placeholder='Search' />
            </div>
            <div className='header__menuItems'>
                <a href='#'>Stoks</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Cash</a>
                <a href='#'>Messages</a>
                <a href='#'>Account</a>
            </div>
            <div className='header__avatar'>
                <Avatar onClick={signOut} src={user?.photoURL} style={{ cursor: 'pointer' }} alt='vijay' />
            </div>
        </div>
    )
}

export default Header
