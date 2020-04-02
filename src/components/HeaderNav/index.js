import React, { Component } from 'react';
import { Menu, Dropdown,Popconfirm,message} from 'antd';
import style from './index.module.less'
import {withRouter}  from 'react-router-dom'
let userdata =[
  {name:'个人中心',icon:'user',divider:false},
  {name:'个人设置',icon:'setting',divider:true},
  {name:'退出登录',icon:'logout',divider:false},
]
let langData =[
  {name:'简体中文',icon:'user',divider:false},
  {name:'繁体中文',icon:'setting',divider:true},
  {name:'英语',icon:'logout',divider:false},
]
function createMenu(data){
 return (
   <Menu>
     {data.map((item,index)=>{
       return(         
          <Menu.Item key={index}>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            {item.name}
            </a>
            <Menu.Divider></Menu.Divider>
          </Menu.Item>
       )
     })}
   </Menu>
 )
}
class HeaderNav extends Component {
  layout = async (_id)=>{
    console.log('退出')
    localStorage.setItem('token','')
  }
  state = {  }
  render() { 
    return ( 
      <div className={style.box}>
        <h2>地府管理系统</h2>
        <div>
        <Dropdown overlay={createMenu(userdata)}>
          <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            个人中心
          </span>
        </Dropdown>
        <Dropdown overlay={createMenu(langData)}>
          <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            语言 
          </span>
        </Dropdown>
        <span className="ant-dropdown-link">
          <Popconfirm
            title="你确定要退出吗?"
            onConfirm={()=>{
              this.layout()
              this.props.history.replace('/login')
            }}
            onCancel={()=>{
              message.error('取消退出');
            }}
          >
            退出
          </Popconfirm> 
        </span>
        </div>
      </div>
     );
  }
}
 
export default withRouter(HeaderNav);