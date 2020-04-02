import React,{Component} from 'react'
import { Table, Button,message,Pagination,Popconfirm } from 'antd';
import logsapi from '@api/logsapi'
class Log extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    page:1,
    pageSize:8,
    count:1,
    columns : [
      {
        title: '管理员',
        dataIndex: 'name',
      },
      {
        title: '操作',
        dataIndex: 'action',
      },
      {
        title: '备注',
        dataIndex: 'desc',
      },
      {
        title:'日期',
        dataIndex:'createTime'
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
                  // this.props.history.replace('/admin/bookUpdate/'+record._id)
                }}size='small'>编辑</Button>
            </div>
          )
        },
      }
    ],
    dataSource:[]
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  refreshList=async()=>{
    let {code,list,msg} = await logsapi.list()
    if(code){
      message.error(msg)
      return false
    }
    this.setState({dataSource:list})
  };
  del=async (_id)=>{
    // 获取id 掉接口 刷新界面
    console.log('删除',_id)
    let result =await logsapi.del(_id)
    // 根据结果进行
    if(result.code !==0){ 
      message.warning('权限不足')
      return false }
    this.refreshList() 
  } 
  componentDidMount(){
    this.refreshList()
  }
  render() {
    const { loading, selectedRowKeys,dataSource,columns,page,pageSize,count } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }} key={selectedRowKeys.length}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }} key={selectedRowKeys.length}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} pagination={false} dataSource={dataSource} />
         {/* 分页器 */}
         <Pagination  current={page}total={count} showQuickJumper pageSize={pageSize}
            onChange={(page,pageSize)=>{
              //只要页码数发生改变就会触发          
              this.setState({page},()=>{
                this.refreshList()
              })   
            }}
            />
      </div>
    );
  }
}
export default Log