import React,{Component,Fragment} from 'react'
import {Card ,Table,Button,notification,Spin,Popconfirm,message,Pagination} from 'antd'
import booksapi from '@api/booksapi'
import style from './lunhui.module.less'
class LunHui extends Component{
  state = {
    dataSource:[],
    columns:[
      {
        title: 'ID',   //显示
        dataIndex: '_id',//数据索引字段
        key: '_id', //key值
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '寿命',
        dataIndex: 'deadage',
        key: 'deadage',
      },
      {
        title: '种族',
        dataIndex: 'nation',
        key: 'nation',
      },
      {
        title: '善恶',
        dataIndex: 'quality',
        key: 'quality',
      }
    ]
  }
  getList= async()=>{
    let result = await booksapi.ending()
    this.setState({dataSource:result.result})
  }
  reborth= async()=>{
    let result = await booksapi.reborth()
    console.log('成功了吗',result)
    this.getList()
  }
  componentDidMount(){
    this.getList()
  }
  render(){
    let {dataSource,columns} = this.state
    return(
      <Fragment>
         <Popconfirm
                title="轮回转世否?"
                onConfirm={()=>{
                  this.reborth()
                }}
                onCancel={()=>{
                  message.error('孟婆不在');
                }}
              >
                <Button type='danger' size='big'>轮回转世</Button>
              </Popconfirm>
    
         <Table pagination={false} dataSource={dataSource} columns={columns} rowKey='_id'></Table>
      </Fragment>
    )
  }
}
export default LunHui