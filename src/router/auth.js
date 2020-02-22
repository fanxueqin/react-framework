import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
class AuthorizedRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        let _info = window.localStorage.getItem("userInfo")? window.localStorage.getItem("userInfo"):'';
        const isLogin = _info && _info.name?true : false;
        const userRole = _info && _info.role === 'admin'?true: false;
        return (
            <Route {...rest} render={props => {
                return isLogin
                    ?( userRole ? <Component {...props} /> : <Redirect to="/notAuth" />)
                    : <Redirect to="/login" />
            }} />
        )
    }
}
export default withRouter(AuthorizedRoute);