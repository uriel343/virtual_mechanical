<template>
<section class="form_register_login">
   <form @submit.prevent="Login">
     <h1>Login</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
        <div id="emailHelp" class="form-text" style="color: rgba(255, 255, 255, 0.466);">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary" value = "Login" style="background-color: #374045; border-style: none;">Submit</button>
      <div id="emailHelp" class="form-text" style="color: rgba(255, 255, 255, 0.466);">Need an account? <router-link to='/register' style="color: rgb(44, 44, 44);">Register Here</router-link></div>
    </form>
</section>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message))
    }
    return {
      Login, 
      email, 
      password
    }
  }
}
</script>

<style>
body{
background-image: url("https://cdn.pixabay.com/photo/2017/12/11/20/03/spanner-3013129_960_720.jpg");
}
.form_register_login {
  margin-top: 20%;
  padding: 100px;
  border-radius: 20px;
  background-color: #EEB76B;
  color: white;
  
}
</style>