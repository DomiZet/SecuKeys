import React from 'react';
// import './SignIn.scss';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class SignInForm extends React.Component {
    constructor() {
      super()
      this.state = {
        password: '',
        showPassword: false
      }
    }

    handleChange = (event) => {
      this.setState({ password: event.target.value })
    }

    handleClickShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword })
    };
  

  render() {
    return (
      <div className="sign-in-form">
            <div className="formHeader">
              <h1>
              Welcome To SecuKeys!
              </h1>
              <p>
              Sign in by entering the informations below
              </p>
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                label="Login"
                type="text"
                variant="outlined"
              />
            </div>
            <div>
              <FormControl variant="outlined" className="password-input">
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
                        edge="end"
                      >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <p>Forgotten Password</p>
            </div>
          {/* <Button variant="outlined" color="primary" className="form-button"> */}
          <Button variant="outlined" color="primary">
            Primary
          </Button>
      </div>
    ) 
  }
}

export default SignInForm;