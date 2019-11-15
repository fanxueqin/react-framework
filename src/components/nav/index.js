import React, { Component }from 'react';
import { NavLink } from 'react-router-dom';
import {  Icon } from 'antd';
import { nav } from 'store/constant';
import './index.less';

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                    {nav.map(i => {
                        return (
                            <li key={i.key} className="navList">
                                <NavLink to={`/${i.to}`} activeClassName="navSelected"><Icon type={i.icon} /><span className="navLabel">{i.title}</span></NavLink>
                            </li>
                        )
                    })}
            </ul>
        )
    }
}


export default Nav;