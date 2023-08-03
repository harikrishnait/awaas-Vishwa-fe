import { Margin } from '@mui/icons-material'
import { FormControl, TextField,Button } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <div className="register-page"></div>
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
        <FormControl fullWidth >
        <TextField  id='filled-basic' label="Full Name" variant='filled'/>
        <TextField  id='filled-basic' label="Phone" type="number" variant='filled'/>
        <TextField  id='filled-basic' label="email" variant='filled'/>
        <TextField  id='filled-basic' label="Username" variant='filled'/>
        <TextField  id='filled-basic' label="password" type="password" variant='filled'/>
        <Button variant="contained" sx={{marginTop:"20px"}} >Sign Up</Button>
        </FormControl>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
