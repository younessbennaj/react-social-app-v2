import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { history } from '../helpers/history'
// import { push } from 'react-router-redux';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {

        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const { authenticated } = this.props;

            if (!authenticated) {
                history.push('/login');
            }
        }

        render() {
            return (
                <div>
                    {this.props.authenticated ? <ComposedComponent {...this.props} /> : null}
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        const { auth } = state;
        return {
            authenticated: auth.authenticated
        };
    };

    // const mapDispatchToProps = dispatch => bindActionCreators({
    //     redirect: () => push('/login')
    // }, dispatch)

    return connect(
        mapStateToProps,
        // mapDispatchToProps
    )(Authenticate);
}