import { TextField,Button, Alert } from '@mui/material'
import React from 'react'
import alert from '../utility/alerts'

const RegisterPage = () => {
  const name = React.useRef();
  const phone = React.useRef();
  const username = React.useRef();
  const email = React.useRef();
  const password = React.useRef();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const nameVal= name.current.value;
    const phoneVal= Number(phone.current.value);
    const usernameVal= username.current.value;
    const emailVal= email.current.value;
    const passwordVal= password.current.value;

    // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/;
    // const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if(nameVal.length<2 || name.length > 50){
    //   alert('Name should be greater than 1 and less than 50 charector', 'error')
    //   return
    // }

    // if(phoneVal<1000000000){
    //   alert("Invalid Phone Number ", "error")
    //   return
    // }

    // if (!mailformat.test(emailVal)) {
    //   alert('Invalid email', 'error')
    //   return
    // }

    // if (!usernameFormat.test(usernameVal)) {
    //   alert('Invalid username! first character should be alphabet [A-Za-z] and other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_].', 'error')
    //   return
    // }
  
    // if (!passwordFormat.test(passwordVal)) {
    //   alert('password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:', 'error')
    //   return
    // }

    // if(usernameVal.length<3 || usernameVal.length>30){
    //   alert('Username should be graterthan 3 or lessthan equals to 30 charectors', "error")
    //   return
    // }

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: nameVal,
        phone: phoneVal,
        email:emailVal,
        username:usernameVal,
        password:passwordVal})


    })
    if (response.ok){
      const data = await response.json(); 
      alert('User Registered', 'success')
    } else {
      const data=await response.json();
      alert(data.error,'error')
    
    }
    
  

  }
  return (
    <div>
      <div className="register-page"></div>
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <TextField fullWidth id='filled-basic' label="Full Name" variant='filled' inputRef={name} required autoComplete='true'/>
        <TextField fullWidth id='filled-basic' label="Phone" type="number" variant='filled' inputRef={phone} required autoComplete='true'/>
        <TextField fullWidth id='filled-basic' label="email" variant='filled' inputRef={email} required autoComplete='true'/>
        <TextField fullWidth id='filled-basic' label="Username" variant='filled' inputRef={username} required autoComplete='true'/>
        <TextField fullWidth id='filled-basic' label="password" type="password" variant='filled' inputRef={password} required autoComplete='true'/>
        <Button variant="contained" sx={{marginTop:"20px" , width:'100%'}} type='submit'>Sign Up</Button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
