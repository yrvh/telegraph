// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    the_id: {
      // type: [String, Number],
      type: Number,
      // value: '11',
      observer(newval, old) {
        // console.log(newval)
      }
      // required: true
    },
    title: {
      type: String,
      value: '岗位'
    },
    hurry: {
      type: Boolean,
      value: false
    },
    errand: {
      type: Boolean,
      value: false
    },

    price: {
      type: [String, Number],
      value: '面议'
    },
    tag: {
      type: Array,
      value: [],
      observer(newval, old) {
        // console.log(newval)
      }
    },
    profile: {
      type: Array,
      value: [],
      observer(newval, old) {
        // console.log(newval)
      }
    },
    avatar: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: []
    },
    the_type: {
      type: String,
      value: '个人招聘'
    },
    addr: {
      type: Object,
      value: {}
    },
    collect: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击card
    onCard(e) {
      let {the_id} = e.currentTarget.dataset
      this.triggerEvent('detail',{the_id},{})
    },
    // 点击收藏
    onCollect(e) {
      let {the_id} = e.currentTarget.dataset
      this.triggerEvent('collect',{the_id},{})
    }
  }
})
