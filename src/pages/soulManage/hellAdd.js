import React, { Component } from 'react';
import style from  './index.module.less'
import hellsApi from '@api/hellsapi'
import {Card, message} from 'antd';
class HellAdd extends Component {
  state = {
    "name":"秦侩",
    "floor":'十八层',
    "deadway":'凌迟',
    "nation":"猪",
    "quality":"-18",
  }
  async componentDidMount(){
  }
  // 添加商品
  submit=async()=>{
   let {code,msg}  = await hellsApi.add(this.state)
   if(code){ return message.error(msg)}
   console.log(this)
   this.props.history.replace('/admin/hell')
  }
  render() { 
    let {name,floor,deadway,nation,quality} = this.state
    return ( 
      <div className={style.box}>
         <Card title='商品添加' style={style.modal}>
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
            <button onClick={this.submit}>添加</button>
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