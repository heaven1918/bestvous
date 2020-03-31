import React,{Component,Fragment} from 'react'
import { Card, Avatar } from 'antd';
import style from './index.module.less'
import equipmentsapi from '@api/equipment'
class Equipment extends Component{
  state={
    list:[],
  }
  renderList(item,index){
    return(
      <div className={style.box} key={index}>
      <div className={style.device}>
        <p><span>{item.name}</span><span className={item.status?'blue':'red'}>{item.status?"设备正常":"停止运行"}</span></p>
        <p><span>操作员:{item.worker}</span><span>已工作{item.year}年</span></p>
      </div>
      <div className={style.img}>
        <img src={item.path} alt=""/>
      </div>
      <div className={style.action}>
        <span>设备暂停</span><span>查看记录</span>
      </div>
    </div>
    )
  }
  refreshList=async ()=>{
    let result = await equipmentsapi.list();
    this.setState({list:result.list})
   } 
  componentDidMount(){
    this.refreshList();
  }
  render(){
    let {list} = this.state
    return(
      <div>
        <h2>设备管理</h2>
       {list.map((item,index)=>{
         return this.renderList(item,index)
       })}
      </div>
    )
  }
}
export default Equipment