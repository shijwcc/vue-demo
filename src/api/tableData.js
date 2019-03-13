import axios from './index'
const filers = {
  page: 1,
  pageSize: 10
}
/*
  获取表格数据
*/

export const getTableData = (url, success) =>
  axios.post(url, filers, success)
