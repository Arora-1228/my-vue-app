//整个项目的api统一管理
import request from './request'

//请求首页左侧的表格的数据
export default {
  getTableData(){
    return request({
      url:'/home/getTableData',
      method:'get',
        // mock:true
    })
  },
  getCountData(){
    return request({
      url:'/home/getCountData',
      method:'get',
        // mock:true
    })
  },
  getChartData(){
    return request({
      url:'/home/getChartData',
      method:'get',
        // mock:true
    })
  },
  getUserData(data){
    return request({
      url:'/user/getUserData',
      method:'get',
      data,
        //  mock:false
    })
  },
  deleteUser(data){
    return request({
      url:'/user/deleteUser',
      method:'get',
      data,
        //  mock:false
    })
  },
  addUser(data){
    return request({
      url:'/user/addUser',
      method:'post',
      data,
        //  mock:false
    })
  },
  updateUser(data){
    return request({
      url:'/user/updateUser',
      method:'post',
      data,
        //  mock:false
    })
  },
  getMenu(params){
    return request({
      url:'/permission/getMenu',
      method:'post',
      data:params,
        //  mock:false
    })
  },
}