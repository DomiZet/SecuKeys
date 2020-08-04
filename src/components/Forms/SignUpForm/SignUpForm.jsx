import React from 'react';
import './SignUpForm.scss';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


class SignUpForm extends React.Component {
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

    handleChange = (event) => {
      this.setState({ password: event.target.value })
    }

    handleClickShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword })
    };

    handleTermsChange = () => {
      this.setState({ confirmTerms: !this.state.confirmTerms });
    };
  

  render() {
    const { login, password, firstName, lastName, confirmTerms } = this.state
    const disabledButton = !(login && password && firstName && lastName && confirmTerms)

    return (
      <div className="SignUpForm">
        {/* <div className="signInForm"> */}
            <div className="formHeader">
                <h1>
                Let's get starded
                </h1>
                Sign up by entering the informations below
            </div>
            <TextField
              id="outlined-password-input"
              onChange={(e) => this.setState({ login: e.target.value})}
              label="Login"
              type="text"
              variant="outlined"
            />
            <TextField
              onChange={(e) => this.setState({ firstName: e.target.value})}
              id="outlined-password-input"
              label="First name"
              type="text"
              variant="outlined"
            />
            <TextField
              onChange={(e) => this.setState({ lastName: e.target.value})}
              id="outlined-password-input"
              label="Last name"
              type="text"
              variant="outlined"
            />
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
                      className="eye-icon"
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
            <div>
              <Switch
                className="confirm-terms"
                checked={this.state.confirmTerms}
                onChange={this.handleTermsChange}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              I agree to the Privacy Policy
            </div>
            <Button disabled={disabledButton} variant="outlined" color="secondary">
              Sign Up
          </Button>
        </div>
      // </div>
    ) 
  }
}

export default SignUpForm;