<template>
<div>
  <h1>welcome, {{ name }}</h1>
  <button class="logout" @click="Logout">Logout</button>
  <UserCreate />
  <UserList />
</div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import { onBeforeMount, ref } from 'vue'
import firebase from 'firebase'
export default {
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
        .then(() => console.log("Signed out"))
        .catch(err => alert(err.message))
    }

    return {
      name,
      Logout
    }
  },
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>
