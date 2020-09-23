import React from 'react';
import { connect } from 'react-redux';
import { history } from "../helpers/history";

export default function (ComposedComponent, authenticated) {
    class Authenticate extends React.Component {

        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        //If the user isn't authentified, redirect him to the login page
        _checkAndRedirect() {
            if (!authenticated) history.push('/login');
        }

        render() {
            return (
                <>
                    {authenticated ? <ComposedComponent {...this.props} /> : null}
                </>
            );
        }
    }

    return Authenticate;
}