import React, { Component }from 'react';
import { NavLink } from 'react-router-dom';
import { nav_show } from 'store/constant_show';
import './index.less';

class NavShow extends Component {
    render() {
        return (
            <ul className="navShow">
                    {nav_show.map(i => {
                        return (
                            <li key={i.key} className="navShowList">
                                <NavLink to={`${this.props.match.url}/${i.to}`} activeClassName="navSelected"><span className="navLabel">{i.title}</span></NavLink>
                            </li>
                        )
                    })}
            </ul>
        )
    }
}


export default NavShow;