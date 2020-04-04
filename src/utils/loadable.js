import React from 'react'
import LoadAble from 'react-loadable'
import { Spin } from 'antd'
// 过度组件
function LogingComponent (){
  return(
    <div>
       <Spin size="large" />
    </div>
  )
}

export default (LoadComponent)=>{
  return LoadAble({
    loader:LoadComponent,
    loading:LogingComponent
  })
}