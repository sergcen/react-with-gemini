import React, { Component } from 'react';
import './RegisterForm.css';

import Input from '../Input';
import Button from '../Button';

class RegisterForm extends Component {
    render() {
        return (
            <div className="register-form">
                <h2>Registration</h2>
                <div className="register-form__field">
                    <Input name="email" placeholder="email" />
                </div>
                <div className="register-form__field">
                    <Input name="password" placeholder="password" type="password" />
                </div>
                <div className="register-form__field">
                    <Input name="password" placeholder="confirm password" type="password" />
                </div>
                <div className="register-form__actions">
                    <Button text="Register" />
                    <Button text="Go to main page" type="link" />
                </div>
            </div>
        );
    }
}

export default RegisterForm;
