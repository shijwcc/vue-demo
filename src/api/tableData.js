import axios from './index'
const filers = {
  page: 1,
  pageSize: 10
}

/*
  获取表格数据
*/

export const getTableData = url =>
  axios.post(url, filers)

/*
  删除表格某一行数据
*/

export const delTableData = (url, id) =>
  axios.post(url, id)
