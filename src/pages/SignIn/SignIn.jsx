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
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';

import Button from '@material-ui/core/Button';

class SignIn extends React.Component {
    constructor() {
      super()
      this.state = {
        password: '',
        showPassword: false,
        signInForm: true,
      }
    }

    handleForm = () => this.setState({ signInForm: !this.state.signInForm})

    handleChange = (event) => {
      console.log('WARTOSC', event.target.value)
      this.setState({ password: event.target.value })
    }

    handleClickShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword })
    };
  
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-form-wrap">
          {this.state.signInForm ?
            <SignInForm />
          :
            <SignUpForm />
          }
          <button onClick={() => this.setState({ signInForm: !this.state.signInForm })}>CHANGE ME</button>
        </div>
      </div>
    ) 
  }
}

export default SignIn;