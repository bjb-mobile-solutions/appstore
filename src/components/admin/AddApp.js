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
    os: '',
    env: '',
    url: 'https://example.com',
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

    appItem = (name, version, os, env, url, comment) => {
        return { 'name': name, 'version': version, 'os': os, 'env': env, 'url': url, 'comment': comment };
    }

    onSubmit = event => {
        const { name, version, os, env, url, comment } = this.state;
        const appItem = this.appItem(name, version, os, env, url, comment);

        this.props.firebase.addApp(appItem).then(ref => {
            alert('Successfully saved: ' + name);
        }).catch(error => {
            alert(error);
        });      

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { name, version, os, env, comment, error } = this.state;

        const isInvalid = name === '' || version === '' || os === '' || env === '' || comment === '';

        return (
            <div>
                <h2>Add a new app</h2>
                <div className="AddAppItemPreview">
                    <AppItem appItem={this.appItem(name, version, os, env, comment)} />
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
                    <select onChange={this.onChange} name="os">
                        <option>Please select the OS</option>
                        <option value="iOS" onChange={this.onChange} name="os">iOS</option>
                        <option value="Android" onChange={this.onChange} name="os">Android</option>
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