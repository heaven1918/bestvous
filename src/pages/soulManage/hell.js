import React,{Component} from 'react'
import {Card ,Table,Button,Spin,Popconfirm,message,Pagination} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import hellsapi from '@api/hellsapi'
import logsapi from '@api/logsapi'
import style from './hell.module.less'
import XLSX from 'xlsx'
class BookCheck extends Component{
  state = { 
    page:1,
    pageSize:8,
    count:0,
    dataSource:[],
    spinning:false,
    arr :[],
    columns:[
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
                  this.del(record._id,record)
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
  del=async (_id,record)=>{
    // 获取id 掉接口 刷新界面
    console.log('删除',_id)
    let result =await hellsapi.del(_id)
    // 根据结果进行
    if(result.code !==0){ 
      message.warning('权限不足')
      return false }
      message.success(result.msg)
    this.refreshList() 
    let name = localStorage.getItem('userName'),
    action ='将'+record.name+'从地狱解脱',
    desc = '恩怨已请'
    let res = await logsapi.add({name,action,desc})
    if(res.code !==0){ message.warning(res.msg) }
  } 
  refreshList=async ()=>{
    let {page,pageSize}  = this.state
    this.setState({spinning:true})
    let result = await hellsapi.list(page,pageSize)
    this.setState({dataSource:result.list,spinning:false,count:result.count})
    this.state.arr = result.list.map((item,index)=>{
      let brr = [],i = 0
      for (const key in item) {
        if(index === 0){
          brr[i]=key
        }else{
          brr[i] = item[key]
        }
        i++
      }
      return brr
    })
    // console.log(arr)
  } 
  componentDidMount(){
    // 请求数据渲染界面
    this.refreshList()
  }
  exportExcel(){
    let  sheet =XLSX.utils.aoa_to_sheet(this.state.arr)
    let  book = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(book,sheet)
    XLSX.writeFile(book,'hell.xlsx')
    // let file = fs.readFileSync('./hell.xlsx')
    // window.open(file)
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
            }}>{<PlusOutlined/>}下一位幸运观众</Button><Button type='warning' onClick={this.exportExcel.bind(this)}>导出</Button>
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