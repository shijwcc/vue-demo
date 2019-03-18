// 必须是同步函数 否则无法被devtools追踪

export default {
  async add (state) {
    state.count++
  }
}

// export default {
//   add (state, payload) {
//     state.count += payload
//   }
// }

// export default {
//   add (state, payload) {
//     state.count += payload.count
//   }
// }
