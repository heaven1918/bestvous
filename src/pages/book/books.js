import React,{Component} from 'react'
import { Table, Button,Popconfirm,message,Pagination} from 'antd';
import booksapi from '@api/booksapi'
import logsapi from '@api/logsapi'
import XLSX from 'xlsx'
class Books extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    page:1,
    pageSize:10,
    count:1,
    dataSource:[],
    arr:[],
    columns : [
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
            </div>
          )
        },
      }
    ],
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
      this.refreshList()
    }, 1000);
  };
  del=async (_id,record)=>{
    // 获取id 掉接口 刷新界面
    console.log('删除',_id)
    let result =await booksapi.del(_id)
    // 根据结果进行
    if(result.code !==0){ return false }
    message.success(result.msg)
    this.refreshList() 
    let name = localStorage.getItem('userName'),
    action ='将'+record.name+'从生死簿删除',
    desc = '一人得道，鸡犬升天'
    let res = await logsapi.add({name,action,desc})
    if(res.code !==0){ message.warning(res.msg) }
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  refreshList=async ()=>{
    this.setState({spinning:true})
    let {page,pageSize}  = this.state
    let result = await booksapi.list(page,pageSize)
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
   } 
   componentDidMount(){
    // 请求数据渲染界面
   this.refreshList()
  }
  exportExcel(){
    let  sheet =XLSX.utils.aoa_to_sheet(this.state.arr)
    let  book = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(book,sheet)
    XLSX.writeFile(book,'book.xlsx')
    // let file = fs.readFileSync('./book.xlsx')
    // window.open(file)
  }
  render() {
    const { loading, selectedRowKeys,page,pageSize,dataSource,columns,count } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            走你
          </Button> <Button type='warning' onClick={this.exportExcel.bind(this)}>导出</Button>
          <span style={{ marginLeft: 8 }}>
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
export default Books