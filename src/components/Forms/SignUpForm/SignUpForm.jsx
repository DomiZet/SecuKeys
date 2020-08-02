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
import Switch from '@material-ui/core/Switch';

class SignUpForm extends React.Component {
    constructor() {
      super()
      this.state = {
        password: '',
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
    return (
      <div className="SignUpForm">
        <div className="signInForm">
            <div className="formHeader">
                <h1>
                Let's get starded
                </h1>
                Sign up by entering the informations below
            </div>
            <TextField
              id="outlined-password-input"
              label="Login"
              type="text"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Login"
              type="text"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Login"
              type="text"
              variant="outlined"
            />
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
                      edge="end"
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <Switch
              checked={this.state.confirmTerms}
              onChange={this.handleTermsChange}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />


            #526de2

        </div>
      </div>
    ) 
  }
}

export default SignUpForm;