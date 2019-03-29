const Mock = require('mockjs')

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

let data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})

console.log(JSON.stringify(data, null, 4))
