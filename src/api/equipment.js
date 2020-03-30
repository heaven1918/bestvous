import axios from '../utils/axios'
class Equipmnts {
  list(){
    let url ='/mall/equipments'
    return axios.get(url)
  }
  add({name}){
    let url ='/mall/equipments'
    return axios.post(url,{name})
  }
  del(_id){
    let url ='/mall/equipments'
    return axios.delete(url+'/'+_id)
  }
  update(_id,payload){
    let url =`/mall/equipments/${_id}`
    return axios.put(url,payload)
  }
}

export default new Equipmnts()