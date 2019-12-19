import React from 'react';
import { checkSessions } from '../services/session';


class Authenticate extends React.Component {
    async componentDidMount() {
        const { history } = this.props;
        const isAuthenticated = await checkSessions();

        if (!isAuthenticated) {
            history.replace('/login');
        } else {
            history.replace('/home');
        }
    }
    render() {
        return (
            <div>Authenticating...</div>
        )
    }
}

export default Authenticate;