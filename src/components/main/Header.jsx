import React from 'react'
import { UserContext } from '../../context/UserContex'
import Logo from '../../assets/logo-named.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const {userInfo,setUserInfo} = React.useContext(UserContext)

  const logoutUser=()=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`,{
      credentials:'include',
      method:'POST'

    })

    setUserInfo(null)
      
    
  }
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-left-brand">
            <img src={Logo} alt="" />
            </Link>
            <h2>Awaas Vishwa</h2>
          
        </div>
        <div className="header-right">
          <div className="header-right-login">
          {
              userInfo ? (
                <>
                  <Link to="/create">Create Post</Link>
                  <Link onClick={logoutUser}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">login</Link>
                  <Link to="/register">Signup</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header