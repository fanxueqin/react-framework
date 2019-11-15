import React, { Component } from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import './index.less';

class OptNav extends Component {
  handleMenuClick = (e) => {
    if (e.key === 'logout') {
      window.localStorage.removeItem('userInfo');
      window.localStorage.removeItem('token');
      this.props.history.push('/login');
    }
  }
  render() {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    const menu = (
      <Menu theme='dark' onClick={this.handleMenuClick}>
        <Menu.Item key="userInfo">
          <span>
            {userInfo.name} ：  {userInfo.role}
          </span>
        </Menu.Item>
        <Menu.Item key="logout">
          <span>
            退出登录
            </span>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="rightOptNav">
        <Dropdown overlay={menu}>
          <Avatar icon="user" style={{ backgroundColor: '#3e4250' }} />
        </Dropdown>
      </div>
    )
  }
}
export default OptNav;