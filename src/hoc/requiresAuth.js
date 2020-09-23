import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';

export default function (ComposedComponent, authenticated) {
    class Authenticate extends React.Component {

        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {

            console.log(authenticated);

            // if (!authenticated) {
            //     console.log('fix here');
            //     history.push('/login');
            // }
        }

        render() {
            return (
                <>
                    {/* {authenticated ? <ComposedComponent {...this.props} /> : null} */}
                    <h1>Hello World !</h1>
                </>
            );
        }
    }

    return Authenticate;
}