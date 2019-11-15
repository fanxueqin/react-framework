import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './index.less';
import Nav from 'components/nav';
import OptNav from 'components/rightOptNav';
import NavShow from 'components/show/navShow';
import { nav_show } from 'store/constant_show';
import routes from 'router';
console.log(routes)
class showHomeLayout extends Component {
    render() {
        return (
            <div className="showHomeLayout">
                <header className="header">
                    <div className="logo">Logo</div>
                    <div className="navSide">
                        <Nav />
                        <OptNav history={this.props.history} path={this.props.match.path} />
                    </div>
                    
                </header>
                <div className="container">
                    <section className="leftSide">
                        <h1>This is page 1</h1>
                        <NavShow  match={this.props.match} />
                    </section>
                    <section className="rightContainer">
                    <Switch>
                        <Redirect from={`${this.props.match.url}`} exact to={`${this.props.match.url}/one`}></Redirect>
                        {nav_show.map(i => {
                            return (
                                <Route path={`${this.props.match.url}/${i.to}`}  exact key={i.key} component={routes[i.key]} />
                            )
                        })}
                    </Switch>
                    </section>
                </div>
            </div>
        )
    }
}
export default showHomeLayout;