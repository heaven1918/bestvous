import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../api/adminapi'
import style from './login.module.less'
class Login extends Component {
  state = {  }
  render() { 
    const onFinish = values => {
      console.log('Success:', values);
      let data = values
      api.login(data).then((res)=>{
        console.log(res)
        if(res.code === 404){
          message.error('用户名密码错误')
        }else{
          //登录成功获取token保存到localstorage
          localStorage.setItem('token',res.token)
          localStorage.setItem('userName',data.userName)
          message.success('登录成功，0.5s后跳转首页',0.2,()=>{
            this.props.history.replace('/admin')
          })
        } 
      })
      // this.props.history.replace('/admin')
    };
    return (
      <div className={style['box']}> 
      <Form
      name="normal_login"
      className={style['login-form']}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="passWord"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          {
            min:3,
            message: '密码最少3位',
          },
          {
            max:9,
            message: '密码最多9位',
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <span className="login-form-forgot" >
          Forgot password
        </span>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <span >注册!</span>
      </Form.Item>
    </Form>
    </div>
     );
  }
}
 
export default Login;