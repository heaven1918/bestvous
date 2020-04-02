import React,{Component,Fragment} from 'react'
import {Table,Button,Popconfirm,message} from 'antd'
import booksapi from '@api/booksapi'
class LunHui extends Component{
  state = {
    dataSource:[],
    columns:[
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
    console.log(result)
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
                <Button type='danger' size='large'>轮回转世</Button>
              </Popconfirm>
    
         <Table pagination={false} dataSource={dataSource} columns={columns} rowKey='_id'></Table>
      </Fragment>
    )
  }
}
export default LunHui