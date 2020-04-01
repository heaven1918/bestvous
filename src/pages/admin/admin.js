import React, { Component } from 'react';
import {Layout} from 'antd'
import CustomNav from '../../components/CustomNav'
import HeaderNav from '../../components/HeaderNav'
import style from './admin.module.less'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component {
  state = {  }
  render() { 
    return ( 
      <Layout className={style.wrapper}>
      {/* 侧边栏 */}
    <Sider>
      <div className="logo" />
      <CustomNav></CustomNav>
    </Sider>
    <Layout >
      <Header>
      <HeaderNav></HeaderNav>
      </Header>
      <Content className={style.bBox}>
        {this.props.children}
      </Content>
      <Footer >Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
     );
  }
}
 
export default Admin;