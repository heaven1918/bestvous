import axios from '../utils/axios'
class Books {
  findOne(id){
    let url ='/mall/books/'+id
    return axios.get(url)
  }
  list(page,pageSize){
    let url ='/mall/books'
    return axios.get(url,{params:{page,pageSize}})
  }
  add(payload){
    let url ='/mall/books'
    return axios.post(url,payload)
  }
  del(_id){
    let url ='/mall/books'
    return axios.delete(url+'/'+_id)
  }
  update(_id,payload){
    let url =`/mall/books/${_id}`
    return axios.put(url,payload)
  }
  ending(){
    let url ='/mall/ending'
    return axios.get(url)
  }
  reborth(){
    let url ='/mall/ending'
    return axios.post(url) 
  }
}

export default new Books()