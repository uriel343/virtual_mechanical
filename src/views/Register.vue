<template>
  <div class="register">
  <section>
   <form @submit.prevent="Register">
     <h1>Register</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Employee access</label>
        </div>
        <input type="submit" class="btn btn-primary" value= "Register">
        <div id="emailHelp" class="form-text">Have an account? <router-link to='/login'>Login Here</router-link></div>
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

</style>