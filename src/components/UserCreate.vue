<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Marca</label>
        <input v-model="form.brand" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Modelo</label>
        <input
          v-model="form.model"
          class="form-control"
          type="text"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Estado del servicio</label>
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
        Create Solicitud de carro
      </button>
    </form>
  </div>
</template>

<script>
import { createCar } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ brand: '', model: '', code: '', status: '' })

    const onSubmit = async () => {
      await createCar({ ...form })
      form.brand = ''
      form.model = ''
      form.code = ''
      form.status = ''
    }

    return { form, onSubmit }
  }
}
</script>
