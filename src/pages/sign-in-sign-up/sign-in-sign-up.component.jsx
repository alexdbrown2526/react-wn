import React from 'react';
import './sign-in-sign-up.styles.scss';

import Signin from '../../components/signin/signin.component.jsx'
import Signup from'../../components/sign-up/sign-up.component.jsx';

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up">
        <Signin/>
        <Signup />
    </div>
)

export default SignInSignUp;