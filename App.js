import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './Login';
import {useDispatch} from 'react-redux';
import { logout } from './features/userSlice';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  var Spinner = require('react-spinkit');
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
    <AppLoading>
      <AppLoadingContents>
        <img src='https://cdn.dribbble.com/users/5183088/screenshots/12092488/screen_shot_2020-06-16_at_1.28.48_am.png' alt='Vijay Choudhary' />
        <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
      </AppLoadingContents>
    </AppLoading>
  );
}
  return (
    <>
        {!user ? (
        <Login />
      ) :
    (
    <div className="app">
     
      <div className='app__header'>
        <Header />
      </div>

      <div className='app__body'>
        <div className='app__container'>
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > img {
    height: 200px;
    padding: 50px;
    object-fit: contain;
  }
`;