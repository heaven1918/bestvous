import React,{Component} from 'react'
import {Button } from 'antd';
import style from './index.module.less'
import equipmentsapi from '@api/equipment'
import config from '../../config'
class Equipment extends Component{
  state={
    list:[]
  }
  renderList(item,index){
    return(
      <div className={style.box} key={index}>
      <div className={style.device}>
        <p><span>{item.name}</span><span className={item.status==='1'?'blue':'red'}>{item.status==='1'?"设备正常":"停止运行"}</span></p>
        <p><span>操作员:{item.worker}</span><span>已工作{item.year}年</span></p>
      </div>
      <div className={style.img}>
        <img src={config.serverIp+item.path} alt=""/>
      </div>
      <div className={style.action}>
        <Button onClick={()=>{this.control(item._id,item.status)}}>{item.status==='1'?"停止运行":"设备启动"}</Button>
      </div>
    </div>
    )
  }
  refreshList=async ()=>{
    let result = await equipmentsapi.list();
    this.setState({list:result.list})
   } 
  control = (id,status)=>{
    status = status==='0'?1:0
    console.log(status)
    equipmentsapi.update(id,{status})
    this.refreshList();
  } 
  componentDidMount(){
    this.refreshList();
  }
  render(){
    let {list} = this.state
    return(
      <div>
        <h3>设备管理  <Button type='primary' onClick={()=>{
          this.props.history.replace('/admin/equipAdd')
        }}>添加设备</Button></h3>
       {list.map((item,index)=>{
         return this.renderList(item,index)
       })}
      </div>
    )
  }
}
export default Equipment