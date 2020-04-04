function Axios(method,url,data){
  /*
  params请求需要的参数
  method get post
  url ：
  data：
  */
   this.obj = {}
   return new Promise((resolve,reject)=>{
     wx.request({
       url: this.baseUrl+url,
       method:method||'get',
       data: data||'',
       success(res){
         if(res.statusCode===200){
           resolve(res.data)
         }else{
           reject(res)
         }           
       },
       fail(err){
         reject(err)
       }
     })
   })
  }
 let obj = new Axios