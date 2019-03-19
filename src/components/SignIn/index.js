import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import './index.css';

import QrReader from 'react-qr-reader'


import { withFirebase } from '../Firebase';

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    cameraEnabled: false,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        this.handleCameraClick = this.handleCameraClick.bind(this);
    }

    handleScan = data => {
        if (data) {
            const json = JSON.parse(data);
            if (json.email && json.password) {
                this.setState({
                    email: json.email,
                    password: json.password,
                    cameraEnabled: false
                })
            }
        }
    }

    handleError = err => {
        console.error(err)
    }


    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCameraClick = event => {

        this.setState({
            cameraEnabled: !this.state.cameraEnabled
        })

        event.preventDefault();
    }



    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button disabled={isInvalid} type="submit">Sign In</button>

                    {error && <p>{error.message}</p>}
                </form>
                <div className="Camera">
                    {this.state.cameraEnabled && <div>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            facingMode={"environment"}
                            style={{ width: '70%', margin: "auto", marginTop: '20px' }}
                        />
                    </div>}
                    <button onClick={this.handleCameraClick}>{this.state.cameraEnabled ? "Close camera" : "Scan QR"}</button>

                </div>
            </div>

        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };