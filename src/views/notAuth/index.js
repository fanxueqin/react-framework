import React, { Component } from 'react';
import './index.less';
class NotAuth extends Component{
    render(){
        return(
            <div className="notAuth">
               抱歉,你没有权限!
            </div>
        )
    }
}
export default NotAuth;