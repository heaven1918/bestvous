import React, { Component,Fragment } from 'react'
import style from './bdata.module.less' 
import {select} from 'antd'
class Bdata extends Component{
  render(){
    return(
      <Fragment>
        <div className={style.head}>
        <span className={style.headicon}>
        <img src="http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/地府大数据/u245.png?token=c41f4818e1bc0b675374a5970e866292cd7aac78227adacd5fea87572823f24d" alt=""/></span>
        <span className={style.headtext}>地府大数据可视化平台</span>
        </div>
        <aside></aside>
        <article></article>
      </Fragment>
    )
  }
}
export default Bdata
