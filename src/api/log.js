import axios from '../utils/axios'
class Logs {
  list(){
    let url ='/mall/logs'
    return axios.get(url)
  }
  add({name}){
    let url ='/mall/logs'
    return axios.post(url,{name})
  }
  del(_id){
    let url ='/mall/logs'
    return axios.delete(url+'/'+_id)
  }
  update(_id,payload){
    let url =`/mall/logs/${_id}`
    return axios.put(url,payload)
  }
}

export default new Logs()