import axios from '../utils/axios'
class Hells {
  list(){
    let url ='/mall/hells'
    return axios.get(url)
  }
  add({name}){
    let url ='/mall/hells'
    return axios.post(url,{name})
  }
  del(_id){
    let url ='/mall/hells'
    return axios.delete(url+'/'+_id)
  }
  update(_id,payload){
    let url =`/mall/hells/${_id}`
    return axios.put(url,payload)
  }
}

export default new Hells()