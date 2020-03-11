import React from 'react';
import FormInput from '../form-input/form-input.component'
import './signin.styles.scss';
import Button from '../button/button-component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>Sign in with email</span>

              <form onSubmit={this.handleSubmit}>
                  <FormInput 
                  name="email" 
                  type="email" 
                  handleChange={this.handleChange} 
                  value={this.state.email}
                  label="email"
                  required/>
                  <FormInput 
                  name="password" 
                  type="password" 
                  value={this.state.password} 
                  handleChange={this.handleChange}
                  label="password"
                  required/>
            <div className="buttons">
                  <Button type="submit">Sign In</Button>
                  <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                  </div>
                  </form>  
            </div>
        )
    }
}

export default Signin;