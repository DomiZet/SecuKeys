import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'

class SignUpForm extends Component {
  constructor() {
    super()
    this.state = {
      password: '',
      login: '',
      firstName: '',
      lastName: '',
      confirmTerms: false,
      showPassword: false
    }
  }

  handleClickShowPassword = () => this.setState({ showPassword: !this.state.showPassword })
  
  handleTermsChange = () => this.setState({ confirmTerms: !this.state.confirmTerms })
  
  handleTypePassword = (event) => this.setState({ password: event.target.value })

  handleTypeLogin = (event) => this.setState({ login: event.target.value})

  handleTypeFirstName = (event) => this.setState({ firstName: event.target.value})

  handleTypeLastName = (event) => this.setState({ lastName: event.target.value})
    
  render() {
    const { login, password, firstName, lastName, confirmTerms, showPassword } = this.state
    const disabledButton = !(login && password && firstName && lastName && confirmTerms)

  return (
    <div className="SignUpForm">
      <div className="form-header">
        <h1>Let's get started</h1>
        Sign up by entering the informations below
      </div>
      <TextField
        onChange={this.handleTypeLogin}
        label="Login"
        type="text"
        variant="outlined"
      />
      <TextField
        onChange={this.handleTypeFirstName}
        label="First name"
        type="text"
        variant="outlined"
      />
      <TextField
        onChange={this.handleTypeLastName}
        label="Last name"
        type="text"
        variant="outlined"
      />
      <FormControl 
        className="password-input"
        variant="outlined" 
      >
        <InputLabel>
          Password
        </InputLabel>
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
      <div>
        <Switch
          className="confirm-terms"
          checked={confirmTerms}
          onChange={this.handleTermsChange}
        />
        I agree to the Privacy Policy
      </div>
      <Button 
        disabled={disabledButton} 
        variant="outlined" 
        color="secondary"
      >
        Sign Up
      </Button>
  </div>
  ) 
}
}

export default SignUpForm