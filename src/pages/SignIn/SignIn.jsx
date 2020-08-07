import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import SignInForm from '../../components/Forms/SignInForm/SignInForm'
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm'
import './SignIn.scss'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      displaySignInForm: true
    }
  }

  handleFormChange = () => this.setState({ displaySignInForm: !this.state.displaySignInForm })
  
  render() {
    const { displaySignInForm } = this.state
    return (
      <div className="SignIn">
        <div className="sign-in-container">
          {displaySignInForm ?
            <SignInForm />
          :
            <SignUpForm />
          }
          <Button 
            className="change-form" 
            variant="outlined" 
            size="large"
            onClick={this.handleFormChange}
          >
            {displaySignInForm ? 'Sign Up' : 'Sign In'}
          </Button>
        </div>
      </div>
    ) 
  }
}

export default SignIn