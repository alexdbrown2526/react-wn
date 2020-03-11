import React from 'react';

import FormInput from '../form-input/form-input.component'
import Button from '../button/button-component';
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});

            this.setState({
                
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                
            });

        } catch(error) {
            console.log(error);
            
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
        
    }




    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput required type="text" 
                    name="displayName" 
                    value={displayName}
                    onChange={this.handleChange}
                    label="displayName"
                    
                    >
                    </FormInput>
                    <FormInput required type="email" 
                    name="email" 
                    value={email}
                    onChange={this.handleChange}
                    label="email"
                    >
                    </FormInput>
                    <FormInput type="password" 
                    name="password" 
                    required
                    value={password}
                    onChange={this.handleChange}
                    label="password"
                    >
                    </FormInput>
                    <FormInput type="password" 
                    required
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="confirmPassword"
                    >
                    </FormInput>
                    <Button type="submit">Sign up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp