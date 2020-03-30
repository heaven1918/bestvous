import React,{Component} from 'react'
import {Card ,Table,Button,Modal,notification,Spin,Popconfirm,message} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import hellsapi from '@api/hellsapi'
import style from './hell.module.less'
class BookCheck extends Component{
  state = { 
    dataSource:[],
    visible:false,
    spinning:false,
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
        title: '地狱层级',
        dataIndex: 'floor',
        key: 'floor',
      },
      {
        title: '死亡方式',
        dataIndex: 'deadway',
        key: 'deadway',
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
      },
      {
        title:'操作',
        key:'action',
        // 定义渲染的列
        // 参数如果没写dataIndex 整条数据  写了dataIndex 那就是关联数据
        render:(record)=>{
          return(
            <div>
               <Popconfirm
                title="你确定要删除这个人吗?"
                onConfirm={()=>{
                  this.del(record._id)
                }}
                onCancel={()=>{
                  message.error('取消删除');
                }}
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
            </div>
          )
        },
      }
    ]
  }
  handleOk = async ()=>{
    notification.success({description:'鬼生无憾，赛尤娜呐',message:'成功',duration:0.3})
    this.setState({visible:false})
  }
  handleCancel=()=>{
    this.setState({visible:false})
   }
  del=async (_id)=>{
    // 获取id 掉接口 刷新界面
    console.log('删除',_id)
    let result =await hellsapi.del(_id)
    // 根据结果进行
    if(result.code !==0){ return false }
    this.refreshList() 
  } 
  refreshList=async ()=>{
    this.setState({spinning:true})
    let result = await hellsapi.list()
    console.log(result,123)
    this.setState({dataSource:result.list,spinning:false})
  } 
  componentDidMount(){
    // 请求数据渲染界面
    this.refreshList()
  }
  render(){
    let {dataSource,visible,spinning,columns} =this.state
    return (
      <div className={style.admins}>
         <Card title='十八层地狱'>
            {/* dataSource 表格内容数据
                columns    表头数据
                rowKey     设置为唯一索引字段
            */}
            <Button type="primary"onClick={()=>{
              this.setState({visible:true})
            }}>{<PlusOutlined/>}下一位幸运观众</Button>
            <Spin spinning={spinning}>
              <Table dataSource={dataSource} columns={columns} rowKey='_id'></Table>
            </Spin>
         </Card>
         {/* 添加的模态框 */}
         <Modal
          title="添加人员"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          userName:<input type="text" ref='us'/><br/>
          passWord:<input type="text" ref='ps'/><br/>
        </Modal>
      </div>
     );
  }
}
export default BookCheck