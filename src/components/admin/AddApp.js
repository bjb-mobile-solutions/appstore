import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import './AddApp.css';
import AppItem from '../appstore/AppItem';


const AddApp = () => (
    <div>
        <AddAppForm />
    </div>
);

const INITIAL_STATE = {
    name: '',
    version: '',
    platform: '',
    env: '',
    comment: '',
    error: null,
};

class AddAppFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleError = err => {
        console.error(err)
    }


    onSubmit = event => {
        const { name, env, comment, OS, version, error } = this.state;

        // this.props.firebase
        //     .doSignInWithEmailAndPassword(email, password)
        //     .then(() => {
        //         this.setState({ ...INITIAL_STATE });
        //         this.props.history.push(ROUTES.LANDING);
        //     })
        //     .catch(error => {
        //         this.setState({ error });
        //     });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    render() {
        const { name, version, platform, env, comment, error } = this.state;

        const isInvalid = name === '' || version === '' || platform === '' || env === '' || comment === '';

        return (
            <div>
                <h2>Add a new app</h2>
                <div className="AddAppItemPreview">
                    <AppItem appItem={{ 'name': name, 'version': version, 'os': platform, 'env': env, 'comment': comment }} />
                </div>
                <form onSubmit={this.onSubmit}>
                    <select onChange={this.onChange} name="name">
                        <option>Please select the app</option>
                        <option value="JB Mobile" onChange={this.onChange} name="name">JB Mobile</option>
                        <option value="Test Lab" onChange={this.onChange} name="name">Test Lab</option>
                    </select>
                    <input
                        name="version"
                        value={version}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Version (e.g. 3.1.143 )"
                    />
                    <select onChange={this.onChange} name="platform">
                        <option>Please select the platform</option>
                        <option value="iOS" onChange={this.onChange} name="platform">iOS</option>
                        <option value="Android" onChange={this.onChange} name="platform">Android</option>
                    </select>
                    <select onChange={this.onChange} name="env">
                        <option>Please select the environment</option>
                        <option value="LAB" onChange={this.onChange} name="env">LAB</option>
                        <option value="UAT" onChange={this.onChange} name="env">UAT</option>
                        <option value="PROD" onChange={this.onChange} name="env">PROD</option>
                    </select>

                    <input
                        name="comment"
                        value={comment}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Comment"
                    />

                    <button disabled={isInvalid} type="submit">Add</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>

        );
    }
}

const AddAppForm = compose(
    withRouter,
    withFirebase,
)(AddAppFormBase);

export default AddApp;

export { AddAppForm };