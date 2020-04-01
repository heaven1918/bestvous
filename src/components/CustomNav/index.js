import React, { Component } from 'react';
import { Menu } from 'antd';
import { HomeTwoTone, SettingTwoTone,BookTwoTone, UserOutlined,WalletTwoTone,
  InteractionTwoTone,InsuranceTwoTone,PoundCircleTwoTone,SmileTwoTone } from '@ant-design/icons';
import menuList from './menulist'
import {withRouter} from 'react-router-dom'
const { SubMenu } = Menu;
function handleClick(e) {
  let {path} = e.item.props 
  this.props.history.replace(path)
}
class CustomNav extends Component {
  renderIcon(icon){
    switch (icon) {
      case 'home':
        return <HomeTwoTone/>
      case 'book':
        return <BookTwoTone/>
      case 'user':
        return <UserOutlined/>
      case 'set':
      return <SettingTwoTone/>
      case 'soul':
      return <InteractionTwoTone/>
      case 'judge':
      return <InsuranceTwoTone/>
      case 'money':
      return <PoundCircleTwoTone/>
      case 'log':
      return <WalletTwoTone/>
      default:
        return <SmileTwoTone/>
    }
  }
  renderItem(data){
      return data.map((item,index)=>{
        if(item.children){
          return(
            <SubMenu key={item.key} title={(()=>{
              return(
                <span>
                  {this.renderIcon(item.icon)}
                  {item.title}
                </span>
              )
            })()}>
              {/* 如果里面还有2级 将渲染的方法在调用一遍 */}
              {this.renderItem(item.children)}
            </SubMenu>
          )
        }else{
          return(
          <Menu.Item key={item.key} path={item.path}>
            {this.renderIcon(item.icon)}
            {item.title}
          </Menu.Item>
          )
        }
      })
  }
  state = {  }
  render() { 
    return ( 
      <Menu onClick={handleClick.bind(this)} style={{ width: 200}} mode="inline" theme='dark'>
      {this.renderItem(menuList)}
      </Menu>
     )
  }
}
export default withRouter(CustomNav);