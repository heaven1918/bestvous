import React from 'react'
import xlsx from 'xlsx'
class Table extends React.Component{
  xxx(){
    let arr = [['姓名','性别','年龄'],['s','m','18'],['s','w','18']];
    let wq = xlsx.utils.aoa_to_sheet(arr)
    let book = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(book,wq)
    xlsx.writeFile(book,'test.xlsx')
  }
  render(){
    return(
      <div>
      <div id="test"></div>
    <button onClick={this.xxx}>转表格</button>
    </div>
    )
  }
}
export default Table