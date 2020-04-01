import React, { Component } from 'react';
import style from  './index.module.less'
import hellsapi from '@api/hellsapi'
import {Card, message} from 'antd';
class HellAdd extends Component {
  state = {
    "name":"",
    "floor":'',
    "deadway":'',
    "nation":"",
    "quality":"",
  }
  async componentDidMount(){
    let {id} =  this.props.match.params
    let result = await hellsapi.findOne(id)
    console.log('查找到的',result.result[0])
    this.setState(result.result[0])
  }
  submit = async ()=>{
    let {id} =  this.props.match.params
    let {code,msg}  = await hellsapi.update(id,this.state)
    if(code){ return message.error(msg)}
    this.props.history.replace('/admin/hell')
  }
  // 添加商品
  render() { 
    let {name,floor,deadway,nation,quality} = this.state
    return ( 
      <div className={style.box}>
         <Card title='商品编辑'>
            姓名: <input type='text' value={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/><br/>
            地狱层级: <input type='text' value={floor} onChange={(e)=>{
              this.setState({floor:e.target.value})
            }}/><br/>
            死亡方式: <input type='text' value={deadway} onChange={(e)=>{
              this.setState({deadway:e.target.value})
            }}/><br/>
            种族: <input type='text' value={nation} onChange={(e)=>{
              this.setState({nation:e.target.value})
            }}/><br/>
            善恶: <input type='text' value={quality} onChange={(e)=>{
              this.setState({quality:e.target.value})
            }}/><br/>
            <button onClick={this.submit}>确认</button>
            <button onClick={()=>{this.props.history.replace('/admin/hell')}}>返回</button>
         </Card>
      </div>
     );
  }
}
 
export default HellAdd;
/*
商品添加
1.用户输入信息
2.获取用户输入的信息
3.调用添加接口
4.添加成功后 可以在页面不动 也可以跳转回列表页
*/ 