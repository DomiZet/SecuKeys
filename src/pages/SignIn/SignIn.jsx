import React from 'react';
import './SignIn.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';

class SignIn extends React.Component {
    constructor() {
      super()
      this.state = {
        password: '',
        showPassword: false
      }
    }

    handleChange = (event) => {
      console.log('WARTOSC', event.target.value)
      this.setState({ password: event.target.value })
    }

    handleClickShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword })
    };
  
    // handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

  render() {
    return (
      <div className="SignIn">
        <div className="background"></div>
        <div className="signInForm">
            <div className="formHeader">
                <h1>
                Welcome To SecuKeys!
                </h1>
                Sign in by entering the informations below
            </div>
            <TextField
              id="outlined-password-input"
              label="Login"
              type="text"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
            />


            <br />
            <br />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    // onMouseDown={this.handleMouseDownPassword}
                    edge="end"
                  >
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

        </div>
      </div>
    ) 
  }
}

export default SignIn;