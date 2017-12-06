最近一个小项目使用 vuejs 技术栈 - vue + vuex + vue-router + element-ui。在做表单的时候遇到一个小问题。

这个表单用于更新用户信息，原信息来自于 vuex，注入到 computed 中

```javascript
computed: mapState({
  user: state => state.users[id]
})
```

vuex 使用严格模式，这意味着不能直接修改 user, 否则会报错。 我选择深度克隆一个 user 对象。直接使用解构对象 { ...user } 无法兼容属性值为对象的对象，所以弃用。

```javascript
import _ from 'lodash'

computed: mapState({
  user: state => { return _.cloneDeep(state.users[id]) }
})
```

保存验证。select 选择另一个选项，组件中 user 会被修改， vuex 中的 user 不会被修改，**但是组件视图无法被更新**。和同事讨论了一会，有了下面的猜测：如果视图可以被更新，即 component user <=> component 产生双项绑定。同时，按照 computed 的定义，vuex user 一旦被修改，也会反映到 compoent user，即 vuex user => component user。我们使用了深度克隆，所以这里的方向是单向的。

问题来了，我们希望 vuex user 只在 form 加载完成后注入到 component 中，之后所有修改仅仅在 component 起作用，直到 component 销毁。但是上面的模型， vuex 依然和组件状态绑定，通过 computed，所有在 vuex 上的数据更新都会反映到 component 上，然而 component 还有局部状态，所以冲突了。然后发生了无法描述的结果。

在想清楚这些以前，我找了很多 vuex 表单的最佳实践，包括[官方说明](https://vuex.vuejs.org/zh-cn/forms.html)。他们的建议是，应该在每个表单项目上绑定 input 处理函数，单独提交 mutation。

```javascript
<input :value="message" @input="updateMessage">
// ...
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}
```

如果表单项很多，基本无法维护。况且单独提交表单项，不符合常理。一般都是所有项目填写完成，用户手动提交。

还有些人，赞同使用非严格模式。 那我觉得还不如直接弃用 vuex。我一直觉得 vuex 一边提供 mutation 用于更新 state，一边又默认可以采用非严格模式，倒不如只提供严格模式来的干净。
[vue + vuex 表单处理](https://www.cnblogs.com/zuxiyo/p/6184428.html)

其实我们之所以觉得这么难，是因为一开始就想错了。对于表单，只是加载一次数据，其实用不着 computed，只在 created 或者 mounted 中初始化一次数据就可以了。

```
created () {
  this.user = getUser(id)
}
```
getUser 可以使用 getter。

简不简单，惊不惊喜。

喜欢请关注 [驽马](https://segmentfault.com/u/numa) 和 [他的专栏](https://segmentfault.com/blog/numa)。 本篇未提供 demo，稍后会补上，太晚了。