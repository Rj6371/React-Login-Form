import React, { useState } from 'react'

export default function Form() {

  const [isLogin, setIsLogin] = useState(true);

  const handleActive = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle" onClick={handleActive}>
          <button className={isLogin ? 'active' : ''}>Login</button>
          <button className={!isLogin ? 'active' : ''}>SignUp</button>
        </div>
        {
          isLogin ?
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder='Email' autoFocus required />
              <input type="password" placeholder='Password' required />
              <a href="#">Forget Password?</a>
              <button>Login</button>
              <p>I have an account? <a href="#" onClick={() => setIsLogin(false)}>SignUp now</a></p>
            </div>
            :
            <div className='form'>
              <h2>SigUp Form</h2>
              <input type="email" placeholder='Email' autoFocus required />
              <input type="password" placeholder='Password' required />
              <input type="password" placeholder='Confirm Password' required />
              <a href="#">Forget Password?</a>
              <button>SignUp</button>
            </div>
        }
      </div>
    </div>
  )
}
