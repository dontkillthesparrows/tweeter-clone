import React from 'react';

import { postNewUser } from '../services/tweets';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: '',
                handle: '',
                password: ''
            },
            error: null
        }
    }

    handleInputChange(field, event) {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [field]: event.target.value
            }
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { history } = this.props;
        const { newUser, error } = this.state;

        try {
            await postNewUser(newUser);
            history.replace('/login');
        } catch {
            this.setState({ error });
        }

    }

    render () {
        const { error } = this.state;

        return (
            <div>
                <h1>Sign up</h1>
                <form>
                    <div>
                        <label>
                            Full Name:
                            <input
                                type="text"
                                value={this.state.newUser.name}
                                onChange={this.handleInputChange.bind(this, 'name')}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={this.state.newUser.handle}
                                onChange={this.handleInputChange.bind(this, 'handle')}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="text"
                                value={this.state.newUser.password}
                                onChange={this.handleInputChange.bind(this, 'password')}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit.bind(this)}>Register</button>
                    </div>
                    <div>
                        {error && <p>Unable to register: {error.message}</p>}
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;