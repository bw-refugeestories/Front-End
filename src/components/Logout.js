import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../utils/actions';

const Logout = props => {
    localStorage.removeItem('token');
    props.logout();
    props.history.push('/login');

    return <div>Logging out</div>;
}

export default connect(null, {logout})(Logout);