import React, { Component } from 'react';
import style from  './add.module.less'
import uploadApi from '@api/upload'
import equipmentsapi from '@api/equipment'
import config from '../../config'
import {Card, message,Button} from 'antd';
class GoodsAdd extends Component {
  state = {
    "name":"剑狱",
    "year":'',
    "status":'0',
    "path":"",
    "worker":'',
  }
  async componentDidMount(){
  }
  // 添加商品
  submit=async()=>{
   if (!this.state.path){return message.info('请先上传图片')}
   let {code,msg}  = await equipmentsapi.add(this.state)
   if(code){ return message.error(msg)}
   this.props.history.replace('/admin/judgeEquipment')

  }
  // 图片上传
  upload= async ()=>{
    // 1. 获取图片里的内容
    let  file = this.refs.img.files[0]
    if(!file){ return message.error('请先选择一张图片')}
    // 图片的验证
    let {size,type} = file 
    let types = ['jpg',"jpeg",'gif','png']
    if(size>1000000){ return message.warning('图片超过1m')}
    if(types.indexOf(type.split('/')[1])===-1){ return message.warning('只允许jpg.jpeg,gif,png四种类型')}
    // 将图片变成base64 
    // 创建文件读取对象 
     let formdata = new FormData()
     formdata.append('hehe',file)
     let {code,msg,path} = await uploadApi.img(formdata)
     if(code){return message.error(msg)}
     console.log('test',path)
     this.setState({path})
  }
  render() { 
    let {name,year,path,worker,status} = this.state
    return ( 
      <div className={style.box}>
         <Card title='设备添加' className={style.modal}>
            名称: <input type='text' value={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/><br/>
            时长: <input type='text' value={year} onChange={(e)=>{
              this.setState({year:e.target.value})
            }}/><br/>
            操作员: <input type='text' value={worker} onChange={(e)=>{
              this.setState({worker:e.target.value})
            }}/><br/>
            状态: 
            <select value={status} onChange={(e)=>{
              this.setState({status:Number(e.target.value)})
            }}>
              <option value={0}>设备暂停</option>
              <option value={1}>设备正常</option>
            </select><br/>
            {/* 缩略图 */}
            缩略图:
            <input type="file" ref='img'/><br/><Button onClick={this.upload}>上传图片</Button><br/>
            <img width='120' height='80' src={config.serverIp+path} alt=""/><br/>
            <Button onClick={this.submit}>添加</Button>
         </Card>
      </div>
     );
  }
}
 
export default GoodsAdd;
/*
商品添加
1.用户输入信息
2.获取用户输入的信息
3.调用添加接口
4.添加成功后 可以在页面不动 也可以跳转回列表页
*/ 