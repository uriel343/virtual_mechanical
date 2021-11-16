<template>
     <div class="card card-body mt-4 form_home_vedit">
    <h3>Estado de tu vehículo</h3>
  <form @submit.prevent="regresar">
      <div class="form-group">
        <label>Marca</label>
        <input v-model="form.brand" class="form-control" readonly />
      </div>

      <div class="form-group mt-3">
        <label>Modelo</label>
        <input
          v-model="form.model"
          class="form-control"
          type="text"
          readonly
        />
      </div>
      <div class="form-group mt-3">
        <label>Estado de Gestion</label>
        <input
          v-model="form.status"
          class="form-control"
          type="text"
          readonly
        />
      </div>
      <div class="form-group mt-3">
        <label>Codigo de Gestion</label>
        <input
          v-model="form.code"
          class="form-control"
          type="text"
          readonly
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Regresar
      </button>
    </form>
  </div>
</template>

<script>
import {  reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMyCarByCode, getCar } from '@/firebase'
export default {
    
setup(){
    const router = useRouter()
    const route = useRoute()
    const carId = computed(() => route.params.code)
    const form = reactive({ brand: '', model: '', status: '', code: '' })

    onMounted(async () => {
      const carIdDoc = await getMyCarByCode(carId.value)
      const car = await getCar(carIdDoc)
      console.log(car, carId.value)
      form.brand = car.brand
      form.model = car.model
      form.status = car.status
      form.code = car.code
    })
      

    const regresar = () => {
        router.push('/')
    }

    return {
       form, regresar
    }
}
}
</script>

<style>

</style>