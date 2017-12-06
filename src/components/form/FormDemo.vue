<template>
  <form @submit.prevent="update(user)">
    <ul>
      <li><label>Name:</label><input type="text" name="name" placeholder="name" v-model="user.name"/></li>
      <li><label>Age:</label><input type="number" name="age" placeholder="age" v-model="user.age"/></li></li>
      <li>
        <input type="radio" name="gender" value="male" v-model="user.gender"/>
        <label>male</label>
        <input type="radio" name="gender" value="female"  v-model="user.gender"/>
        <label>female</label>
      </li>
      <li>
        <button>Cancel</button>
        <button @click.stop.prevent="update(user)">Submit</button>
      </li>
    </ul>
  </form>
</template>

<script>
  import _ from 'lodash'
  import { mapMutations } from 'vuex'
  import * as types from '@/store/mutation-types'

  export default {
    created () {
      this.user = _.cloneDeep(this.$store.state.user)
    },

    data () {
      return {}
    },

    methods: {
      ...mapMutations('user', {
        update: types.UPDATE_USER
      })
    }
  }
</script>
<style scoped>
  li {
    text-align: left;
    padding: 8px 0;
  }

  label {
    width: 100px;
  }
</style>