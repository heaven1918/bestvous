import React, { Component } from 'react';
import style from  './index.module.less'
import booksapi from '@api/booksapi'
import {Card, message} from 'antd';
class BookAdd extends Component {
  state = {
    "name":"",
    "age":'',
    "deadage":'',
    "nation":"",
    "quality":"",
  }
  async componentDidMount(){
    let {id} =  this.props.match.params
    let result = await booksapi.findOne(id)
    this.setState(result.result[0])
  }
  submit = async ()=>{
    let {id} =  this.props.match.params
    let {code,msg}  = await booksapi.update(id,this.state)
    if(code){ return message.error(msg)}
    this.props.history.replace('/admin/bookCheck')
  }
  // 添加商品
  render() { 
    let {name,age,deadage,nation,quality} = this.state
    return ( 
      <div className={style.box}>
         <Card title='商品编辑'>
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
            <button onClick={this.submit}>确认</button>
            <button onClick={()=>{this.props.history.replace('/admin/bookCheck')}}>返回</button>
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