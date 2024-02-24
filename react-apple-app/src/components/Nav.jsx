import React, { useEffect, useState } from 'react'
import { json, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase'

const initialUserData = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')) : {}


const Nav = () => {

  const [userData, setUserData] = useState(initialUserData);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/');
      else if (user && pathname === '/') navigate('/main');
    })
  }, [auth, navigate, pathname])
  
  const handleAuth = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      setUserData(result.user);
      localStorage.setItem('userData', JSON.stringify(result.user));
    }).catch((error) => {
      console.error(error);
    });
  }
  
    const handleLogOut = () => {
      signOut(auth)
        .then(() => {
          setUserData({});
          localStorage.removeItem('userData');
        })
        .catch((error) => {
          console.error(error);
        })
    }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <NavWrapper>
      <Logo>
        <img
          alt='logo'
          src='/images/apple-logo.png'
          onClick={() => (window.location.href = '/')}
        />
      </Logo>

      {pathname === '/' ? (
        <Login onClick={handleAuth}>Login</Login>
      ) :
        (
          <>
            <Input
              value={searchValue}
              onChange={handleChange}
              className='nav__input'
              type='text'
              placeholder='영화를 검색해주세요.'
            />

            <SignOut>
              <UserImg src={userData.photoURL} alt={userData.displayName} />
              <DropDown>
                <span onClick={handleLogOut}>
                  Sign Out
                </span>
              </DropDown>
            </SignOut>
          </>
        )
      }

    </NavWrapper>
  )
}

const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`


const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;


const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0,0,0,0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: 1px solid lightgray;
`
const Login = styled.a`
  background-color: rgba(0,0,0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
const Logo = styled.a`
  padding: 0;
  width: 70px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 5px;

  img {
    display: block;
    width: 100%;
  }
`

export default Nav
