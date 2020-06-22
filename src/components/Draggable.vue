<!--自定义表单demo-->
<template>
  <el-row>
    <div class="dndList">
      <el-col :span="11">
        <div class="dndList-list">
          <draggable :list="list2"
                     :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
                     @start="start"
                     @end="end"
                     class="dragArea">
            <div v-for="(element,index) in list2" :key="index"
                 :class="{undraggable : element.flag}"
                 class="list-complete-item">
              <div class="list-complete-item-handle2">
                <label>{{element.name}}</label>
                <el-input v-if="element.flagName == 1" v-model="element.charName" placeholder="请输入内容"></el-input>
                <el-select v-if="element.flagName == 2" v-model="element.charName" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-radio-group v-if="element.flagName == 3" v-model="element.charName">
                  <el-radio label="3">备选项</el-radio>
                  <el-radio label="6">备选项</el-radio>
                </el-radio-group>
                <el-checkbox-group v-if="element.flagName == 4" v-model="element.charName">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B"></el-checkbox>
                  <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
                <el-date-picker
                        v-if="element.flagName == 5" v-model="element.charName"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
          </draggable>
        </div>
      </el-col>
      <el-col :span="11" :offset="2">
        <div class="dndList-list">
          <draggable :list="list1" :options="{group:'article', disabled: disabled}"
                     @start="start22"
                     @end="end22"
                     class="dragArea11"
                     style="height: 80vh">
            <div v-for="(element, index) in list1" :key="index" class="list-complete-item" :class="{undraggable : element.flag}">
              <div class="list-complete-item-handle">
                <label>{{element.name}}</label>
                <!--<label>{{element['name'+index] !== undefined ? element['name'+index] : element.flagName == 1 ? '输入框' : '选择框'}}</label>-->
                <el-input v-if="element.flagName == 1" v-model="element['charName1'+index]" @change="changeChar(index, element.charName1)" placeholder="请输入内容"></el-input>
                <el-select v-if="element.flagName == 2" v-model="element['charName1'+index]" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-radio-group v-if="element.flagName == 3" v-model="element['charName1'+index]">
                  <el-radio label="3">备选项</el-radio>
                  <el-radio label="6">备选项</el-radio>
                </el-radio-group>
                <el-checkbox-group v-if="element.flagName == 4" v-model="element.charName1">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B"></el-checkbox>
                  <el-checkbox label="复选框 C"></el-checkbox>
                </el-checkbox-group>
                <el-date-picker
                        v-if="element.flagName == 5" v-model="element['charName1'+index]"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
              </div>
              <div class="delIcon">
                <i class="el-icon-delete" @click="handleDel(index, element.id)"></i>
                <i class="el-icon-edit" @click="edit(index, element.id)"></i>
              </div>
            </div>
          </draggable>
        </div>
      </el-col>
    </div>
    <el-button type="primary" @click="save">保存</el-button>
  </el-row>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'DndList',
  components: {draggable},
  watch: {},
  data () {
    return {
      falgs: 'article',
      disabled: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      list: [],
      list1: [],
      list2: [
        {id: 1, name: '输入框', flagName: 1, charName: '', charName1: ''},
        {id: 2, name: '选择框', flagName: 2, charName: '', charName1: ''},
        {id: 3, name: '单选框', flagName: 3, charName: '', charName1: ''},
        {id: 4, name: '复选框', flagName: 4, charName: '', charName1: []},
        {id: 5, name: '日期', flagName: 5, charName: '', charName1: ''}
      ]
    }
  },
  methods: {
    changeChar (index, val) {
      console.log(index, val)
    },
    save () {
      console.log(this.list1)
    },
    end (ev) {
      if (ev.to.className === 'dragArea11') {
        this.$set(this.list2[ev.oldIndex], 'flag', false)
      }
    },
    start (event) {
      console.log(event.oldIndex)
    },
    start22 (event) {
      this.falgs = '222222'
    },
    end22 (ev) {
      this.falgs = 'article'
    },
    handleDel (index, id) {
      this.list1.splice(index, 1)
      this.list.splice(index, 1)
      let q = this.list2.find((value, index, arr) => {
        return value.id === id
      })
      this.$set(q, 'flag', false)
    },
    edit (index) {
      this.list1[index]['name'] = '测试选择'
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
  .list-complete-item-handle2 > label {
    width: 4vw;
    padding: 0 10px;
    display: inline-block;
    text-align: right;
  }

  .list-complete-item-handle > label {
    width: 4vw;
    padding: 0 10px;
    display: inline-block;
    text-align: right;
  }

  >>>.el-input {
    width: 28vw;
  }

  >>>.el-checkbox-group {
    width: 84%;
    float: right;
  }

  .list-complete-item {
    padding: 10px 0;
  }

  >>>.el-col-11 {
    padding: 10px;
    border: 1px solid #c3bdbd;
    border-radius: 10px;
    height: 80vh;
  }

  .delIcon {
    text-align: right;
    width: 30vw;
    margin: 0 auto;
  }

  .dndList-list {
    width: 80%;
    margin-left: 10%;
  }
</style>
