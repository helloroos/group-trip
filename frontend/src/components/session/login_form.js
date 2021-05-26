import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errored: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleErrors(field) {
        
        return this.props.errors.filter(error => error.includes(field))
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
        }
        
        this.props.login(user)
            .then((res) => {
                if (typeof res !== 'undefined') {
                    return this.setState({ errored: true })
                } else {
                    this.props.hideModal()
                }
            })
        }

    render() {
        return (
                <div id='login'>
                    <form >
                        <input className='form-inputs' value={this.state.email}
                                onChange={this.update('email')}
                                type='text'
                                placeholder='Email *'
                            />
                        {this.state.errored ? (
                            <div>{this.handleErrors('Email')}</div>
                            ) : null
                        }
                        <input className='form-inputs' value={this.state.password}
                                onChange={this.update('password')}
                                type='password'
                                placeholder='Enter a password *'
                            />
                        {this.state.errored ? (
                            <div>{this.handleErrors('password')}</div>
                            ) : null
                        }
                        <button className='buttons' onClick={this.handleSubmit}
                                value='Sign In'>
                            Sign In
                        </button>
                    </form>
                    <div>Don'have an account?</div>
                    <div onClick={() => this.props.openModal('Sign Up')}> 
                        Create an account
                    </div>
                </div>
        )
    }
};

export default LoginForm;