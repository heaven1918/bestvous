import axios from '../utils/axios'
class Hells {
  findOne(id){
    let url ='/mall/hells/'+id
    return axios.get(url)
  }
  list(page,pageSize){
    let url ='/mall/hells'
    return axios.get(url,{params:{page,pageSize}})
  }
  add(payload){
    let url ='/mall/hells'
    return axios.post(url,payload)
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