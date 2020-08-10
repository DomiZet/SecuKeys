import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

class SignInForm extends Component {
    constructor() {
      super()
      this.state = {
        password: '',
        login:'',
        showPassword: false
      }
    }
    
    handleTypeLogin = (event) => this.setState({ login: event.target.value })
    
    handleTypePassword = (event) => this.setState({ password: event.target.value })
    
    handleClickShowPassword = () => this.setState({ showPassword: !this.state.showPassword })
  
    render() {
    const { showPassword, password, login } = this.state
    const displaySignInButton = !(password && login)

    return (
      <div className="SignInForm">
        <div className="form-header">
          <h1>Welcome To SecuKeys!</h1>
          <p>Sign in by entering the informations below</p>
        </div>
          <TextField
            id="outlined-password-input"
            label="Login"
            type="text"
            variant="outlined"
            onChange={this.handleTypeLogin}
          />
        <div>
          <FormControl 
            className="password-input"
            variant="outlined" 
          >
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.handleTypePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className="eye-icon"
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <div className="password-link">
            <Link 
              className="reset-link"
              to="/reset-password" 
            >
              Forgotten Password
            </Link>
          </div>
        </div>
        <Button 
          disabled={displaySignInButton} 
          variant="outlined" 
          color="secondary"
        >
          Sign In
        </Button>
      </div>
    ) 
  }
}

export default SignInForm