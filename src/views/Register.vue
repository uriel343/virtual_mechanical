<template>
  <div class="register">
  <section class="form_register_login">
   <form @submit.prevent="Register">
     <h1>Register</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          <div id="emailHelp" class="form-text" style="color: rgba(255, 255, 255, 0.466);">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Employee access</label>
        </div>
        <input type="submit" class="btn btn-primary" value= "Register" style="background-color: #374045; border-style: none;">
        <div id="emailHelp" class="form-text" style="color: rgba(255, 255, 255, 0.466);">Have an account? <router-link to='/login' style="color: rgb(44, 44, 44);">Login Here</router-link></div>
    </form>
</section>
  </div>
</template>

<script>
import firebase from 'firebase'
import { ref } from 'vue'
export default {
  setup() {
      const email = ref("");
      const password = ref("");

      const Register = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then( 
            alert("Now your register")
          )
          .catch(err => alert(err.message))
      }
      return  {
        Register,
        email,
        password
      }
  }
}
</script>

<style>
body{
background-image: url("https://images.unsplash.com/photo-1619505372149-07875c35b313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
}
.form_register_login {
  margin-top: 20%;
  padding: 100px;
  border-radius: 20px;
  background-color: #EEB76B;
  color: white;
  
}
</style>