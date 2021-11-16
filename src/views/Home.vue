<template>
<div v-if="!user_data">
  <FindMyCarByCode />

</div>
<div class="form_home" v-if="user_data">
  <h1 style="color: white;">Bienvenido, {{ name }}</h1>
  <button class="logout btn" @click="Logout" style="background-color: #374045; border-style: none; color: white">Logout</button>
  <UserCreate />
  <UserList />
</div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import FindMyCarByCode from '@/components/FindMyCarByCode.vue'
import { onBeforeMount, ref } from 'vue'
import firebase from 'firebase'

export default {
  data() {
    return {
      user_data: firebase.auth().currentUser
    }
  },
  setup(){
    const user = firebase.auth().currentUser;
    const name = ref("")

    onBeforeMount(() => {
      if (user) {
        name.value = user.email.split('@')[0];
      }
    })

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
            location.reload()
            console.log("Signed out")
          })
        .catch(err => alert(err.message))
    } 

    return {
      name,
      Logout
    }
  },
  name: 'Home',
  components: { UserCreate, UserList, FindMyCarByCode }
}
</script>

<style>
.form_home {
  margin-top: 5%;
  padding: 100px;
  border-radius: 20px;
  background-color: #EEB76B;
}
</style>
