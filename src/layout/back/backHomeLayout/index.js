import React, { Component } from 'react';
import './index.less';
import Nav from 'components/nav';
import OptNav from 'components/rightOptNav';

class backHomeLayout extends Component {
    render() {
        return (
            <div className="backHomeLayout">
                <header className="header">
                    <div className="logo">Logo</div>
                    <div className="navSide">
                        <Nav  match={this.props}/>
                        <OptNav history={this.props.history} path={this.props.match.path} />
                    </div>
                    
                </header>
                <div className="container">
                    This is back page
                </div>
            </div>
        )
    }
}
export default backHomeLayout;