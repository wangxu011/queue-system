import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'

// 下面函数的返回值类型没有声明，是因为TS的函数中有推断类型一说，TS编译器可以自动识别出类型
// @ts-ignore
const bizIP: string = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BIZ_IP : bizIp
// @ts-ignore
const bizPORT: string = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BIZ_PORT : bizPort
// @ts-ignore
const asIP: string = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_AS_IP : asIp
// @ts-ignore
const asPORT: string = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_AS_PORT : asPort
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  let url: string | undefined = config.url
  if (url!.indexOf('/as') != -1) {
    url = url!.replace('/as', '')
    config.url = `http://${asIP}:${asPORT}/uface/v1${url}`
  } else if (url!.indexOf('/biz') != -1) {
    url = url!.replace('/biz', '')
    config.url = `http://${bizIP}:${bizPORT}/uface/v1${url}`
  }
  if(url === '/auth/token'){
    config.headers['Authorization'] = 'Basic ' + btoa('webapp:AG4D13eCCVuRzm9v')
    config.data = qs.stringify(config.data)
  }else{
    config.headers['Authorization'] = `Bearer ${Cookie.get('token')}`
  }
  return config
}, (err: any) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === 0 || !res.data.code) {
    return res.data
  }
},(error: any) => {
    // error.response.status
    // error.response.data.code
    // error.response.data.message
    return Promise.reject(error)
  }
)

export default axios


