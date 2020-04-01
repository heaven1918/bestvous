import axios from '../utils/axios'
class Logs {
  findOne(id){
    let url ='/mall/logs/'+id
    return axios.get(url)
  }
  list(){
    let url ='/mall/logs'
    return axios.get(url)
  }
  add(payload){
    let url ='/mall/logs'
    return axios.post(url,payload)
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