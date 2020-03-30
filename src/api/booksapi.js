import axios from '../utils/axios'
class Books {
  list(){
    let url ='/mall/books'
    return axios.get(url)
  }
  add({name}){
    let url ='/mall/books'
    return axios.post(url,{name})
  }
  del(_id){
    let url ='/mall/books'
    return axios.delete(url+'/'+_id)
  }
  update(_id,payload){
    let url =`/mall/books/${_id}`
    return axios.put(url,payload)
  }
}

export default new Books()