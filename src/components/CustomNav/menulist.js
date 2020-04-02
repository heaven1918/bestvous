export default[
  {
    key:'1',
    title:"首页",
    icon:'home',
    path:'/admin',
    children:[
      {
        key:'1-1',
        title:"地府大数据",
        path:'/admin/bdata'
       }
      ]
  },
  {
   key:'2',
   title:'生死簿管理',
   icon:'book',
   path:'/admin/book',
   children:[
     {
       key:'2-1',
       title:"生死簿",
       path:'/admin/bookCheck'
      },
     {
      key:'2-2',
      title:"批量操作",
      path:'/admin/books'
    }
   ]
  },
  {
    key:'3',
    title:"勾魂管理",
    icon:'soul',
    path:'/admin/soulManage',
    children:[
      {
        key:'3-1',
        title:'六道轮回',
        path:'/admin/lunHui'
      },
      {
        key:'3-2',
        title:'十八层地狱',
        path:'/admin/hell'
      }
    ]
  },
  {
    key:'4',
    title:"审判管理",
    icon:'judge',
    path:'/admin/judge',
    children:[
      {
        key:'4-1',
        title:'设备管理',
        path:'/admin/judgeEquipment'
      },
      {
        key:'4-2',
        title:'审判记录',
        path:'/admin/judgeRecord'
      },
      // {
      //   key:'4-3',
      //   title:'沉冤昭雪',
      //   path:'/admin/judgeReload'
      // }
    ]
  },
  // {
  //   key:'5',
  //   title:"冥币管理",
  //   icon:'money',
  //   path:'/admin/money'
  // },
  {
    key:'6',
    title:"日志管理",
    icon:'log',
    path:'/admin/log'
  },
  {
    key:'7',
    title:"人事管理",
    icon:'admin',
    path:'/admin/administrator'
  },
]
