import React, { Component } from 'react';
import style from  './index.module.less'
import booksApi from '@api/booksapi'
import {Card, message,Button} from 'antd';
class BookAdd extends Component {
  state = {
    "name":"憨憨一号",
    "age":'180',
    "deadage":'123',
    "nation":"猪",
    "quality":"3",
  }
  async componentDidMount(){
  }
  // 添加商品
  submit=async()=>{
   let {code,msg}  = await booksApi.add(this.state)
   if(code){ return message.error(msg)}
   console.log(this)
   this.props.history.replace('/admin/bookCheck')
  }
  render() { 
    let {name,age,deadage,nation,quality} = this.state
    return ( 
      <div className={style.box}>
         <Card title='生死簿添加' className={style.modal}>
            姓名: <input type='text' value={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/><br/>
            年龄: <input type='text' value={age} onChange={(e)=>{
              this.setState({age:e.target.value})
            }}/><br/>
            寿命: <input type='text' value={deadage} onChange={(e)=>{
              this.setState({deadage:e.target.value})
            }}/><br/>
            种族: <input type='text' value={nation} onChange={(e)=>{
              this.setState({nation:e.target.value})
            }}/><br/>
            善恶: <input type='text' value={quality} onChange={(e)=>{
              this.setState({quality:e.target.value})
            }}/><br/>
            <Button onClick={this.submit}>添加</Button>
            <Button onClick={()=>{this.props.history.replace('/admin/bookCheck')}}>返回</Button>
         </Card>
      </div>
     );
  }
}
 
export default BookAdd;
/*
商品添加
1.用户输入信息
2.获取用户输入的信息
3.调用添加接口
4.添加成功后 可以在页面不动 也可以跳转回列表页
*/ 