import axios from '../utils/axios'
class Equipmnts {
  findOne(id){
    let url ='/mall/equipments/'+id
    return axios.get(url)
  }
  list(){
    let url ='/mall/equipments'
    return axios.get(url)
  }
  add(payload){
    let url ='/mall/equipments'
    return axios.post(url,payload)
  }
  del(_id){
    let url ='/mall/equipments'
    return axios.delete(url+'/'+_id)
  }
  update(_id,payload){
    let url =`/mall/equipments/${_id}`
    console.log('接口测试',_id,payload)
    return axios.put(url,payload)
  }
}

export default new Equipmnts()