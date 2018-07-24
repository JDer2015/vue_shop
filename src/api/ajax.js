import axios from 'axios'

export default (url,data={},type='GET') =>{
  return new Promise((reslove,reject) => {
    let promise
    const baseUrl = ''
    url = baseUrl + url
    if(type === 'GET'){
      let paramStr = ''
      Object.keys(data).forEach(key => {
        paramStr += key + '=' + data[key] + '&'
      })
      if(paramStr){
        paramStr = '?' + paramStr.substring(0,paramStr.length-1)
      }
      promise = axios.get(url + paramStr)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(response => reslove(response.data))
      .catch(error => reject(error))
  })

}
