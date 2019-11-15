import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
class AuthorizedRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        const isLogin = JSON.parse(window.localStorage.getItem("userInfo")).name?true : false;
        const userRole = JSON.parse(window.localStorage.getItem("userInfo")).role === 'admin'?true: false;
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