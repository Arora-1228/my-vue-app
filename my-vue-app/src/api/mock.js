import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
import menuApi from './mockData/permission'

//拦截ajax请求

//1.拦截的路径 2.拦截的方式 3.拦截的数据
Mock.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData)
Mock.mock(/api\/home\/getCountData/, 'get', homeApi.getCountData)
Mock.mock(/api\/home\/getChartData/, 'get', homeApi.getChartData)
Mock.mock(/api\/user\/getUserData/, 'get', userApi.getUserData)
Mock.mock(/api\/user\/deleteUser/, 'get', userApi.deleteUser)
Mock.mock(/api\/user\/addUser/, 'post', userApi.createUser)
Mock.mock(/api\/user\/updateUser/, 'post', userApi.updateUser)
Mock.mock(/api\/permission\/getMenu/, 'post', menuApi.getMenu)