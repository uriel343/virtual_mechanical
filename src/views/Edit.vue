<template>
  <div class="card card-body mt-4 form_home_vedit">
    <h3>Edit Car</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Brand</label>
        <input v-model="form.brand" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Model</label>
        <input
          v-model="form.model"
          class="form-control"
          type="text"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Status</label>
        <input
          v-model="form.status"
          class="form-control"
          type="text"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Codigo de gestion</label>
        <input
          v-model="form.code"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCar, updateCar } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const carId = computed(() => route.params.id)

    const form = reactive({ brand: '', model: '', status: '', code: '' })
    onMounted(async () => {
      const car = await getCar(carId.value)
      console.log(car, carId.value)
      form.brand = car.brand
      form.model = car.model
      form.status = car.status
      form.code = car.code
    })

    const update = async () => {
      await updateCar(carId.value, { ...form })
      router.push('/')
      form.brand = ''
      form.model = ''
      form.status = '',
      form.code = ''
    }

    return { form, update }
  }
}
</script>

<style>
.form_home_vedit{
  margin-top: 10%;
  padding: 100px;
  border-radius: 20px;
  background-color: #EEB76B;
  color: white;
}
</style>