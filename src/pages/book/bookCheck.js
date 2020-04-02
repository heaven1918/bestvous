import React,{Component} from 'react'
import {Card ,Table,Button,Spin,Popconfirm,message,Pagination} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import style from './bookcheck.module.less'
import booksapi from '@api/booksapi'
import logsapi from '@api/logsapi'
class BookCheck extends Component{
  state = { 
    page:1,
    pageSize:5,
    count:0,
    dataSource:[],
    spinning:false,
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
                  this.del(record._id,record)
                }}
                onCancel={()=>{
                  message.error('取消删除');
                }}
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' ghost onClick={()=>{
                  this.props.history.replace('/admin/bookUpdate/'+record._id)
                }}size='small'>编辑</Button>
            </div>
          )
        },
      }
    ]
  }
  del=async (_id,record)=>{
    // 获取id 掉接口 刷新界面
    console.log('删除',_id)
    let result =await booksapi.del(_id)
    // 根据结果进行
    if(result.code !==0){ return message.error(result.msg) }
    message.success(result.msg)
    this.refreshList() 
    let name = localStorage.getItem('userName'),
    action ='将'+record.name+'从生死簿删除',
    desc = '一人得道，鸡犬升天'
    let res = await logsapi.add({name,action,desc})
    if(res.code !==0){ message.warning(res.msg) }
  }
   refreshList=async ()=>{
    this.setState({spinning:true})
    let {page,pageSize}  = this.state
    let result = await booksapi.list(page,pageSize)
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
         <Card title='生死簿'>
            {/* dataSource 表格内容数据
                columns    表头数据
                rowKey     设置为唯一索引字段
            */}
            <Button type="primary"onClick={()=>{
              this.props.history.replace('/admin/bookAdd')
            }}>{<PlusOutlined/>}添加人员</Button>
            <Spin spinning={spinning}>
              <Table pagination={false} dataSource={dataSource} columns={columns} rowKey='_id'></Table>
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
         {/* 添加的模态框 */}

      </div>
     );
  }
}
export default BookCheck