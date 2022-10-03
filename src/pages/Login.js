import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="box">
    
    <div className="square" ></div>
    <div className="square" ></div>
    <div className="square" ></div>
    <div className="square" ></div>
    <div className="square" ></div>
    <div className="square" ></div>
    
   <div className="container"> 
    <div className="form"> 
      <h2 className='text-center'>LOGIN</h2>
      <form action="" className='flex flex-col px-3'>
        <div className="inputBx pt-10">
          <input type="text" required="required"/>
          <span>Login</span>
          {/* <i className="fas fa-user-circle"></i> */}
        </div>
        <div className="inputBx password">
          <input id="password-input" type="password" name="password" required="required"/>
          <span>Password</span>
          {/* <a href="" className="password-control" onclick="return show_hide_password(this);"></a> */}
          {/* <i className="fas fa-key"></i> */}
        </div>
        {/* <label className="remember"><input type="checkbox"/>
          Remember</label> */}
        <div className="inputBx pl-[28%] pt-10">
          <input type="submit" value="Log in" disabled/> 
        </div>
      </form>
      <p className='pl-8' >Forgot password? <a href="">Click Here</a></p> 
      <p className='pl-8'>Don't have an account <a href="">Sign up</a></p>
    </div>
  </div>
    
  </div>
  )
}

export default Login