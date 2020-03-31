import React,{Component} from 'react'
import {Card ,Table,Button,Spin,Popconfirm,message,Pagination} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import hellsapi from '@api/hellsapi'
import style from './hell.module.less'
class BookCheck extends Component{
  state = { 
    page:1,
    pageSize:5,
    count:0,
    dataSource:[],
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
              <Button type='primary' ghost onClick={()=>{
                  this.props.history.replace('/admin/hellUpdate/'+record._id)
                }}size='small'>编辑</Button>
            </div>
          )
        },
      }
    ]
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
    let {page,pageSize}  = this.state
    this.setState({spinning:true})
    let result = await hellsapi.list(page,pageSize)
    console.log(result,123)
    this.setState({dataSource:result.list,spinning:false,count:result.count})
  } 
  componentDidMount(){
    // 请求数据渲染界面
    this.refreshList()
  }
  render(){
    let {dataSource,spinning,columns,page,pageSize,count} =this.state
    return (
      <div className={style.admins}>
         <Card title='十八层地狱'>
            {/* dataSource 表格内容数据
                columns    表头数据
                rowKey     设置为唯一索引字段
            */}
            <Button type="primary"onClick={()=>{
             this.props.history.replace('/admin/hellAdd')
            }}>{<PlusOutlined/>}下一位幸运观众</Button>
            <Spin spinning={spinning}>
              <Table dataSource={dataSource} pagination={false} columns={columns} rowKey='_id'></Table>
            </Spin>
             {/* 分页器 */}
            <Pagination  current={page}total={count} showQuickJumper pageSize={pageSize}
            onChange={(page,pageSize)=>{
              //只要页码数发生改变就会触发          
              this.setState({page},()=>{
                this.refreshList()
              })   
            }}
            />
         </Card>
      </div>
     );
  }
}
export default BookCheck