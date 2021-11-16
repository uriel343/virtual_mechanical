<template>
  <div class="card card-body mt-4 form_home_vedit">
    <h3>Encuentra tu vehiculo</h3>
    <form @submit.prevent="findByCode">
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
        Buscar
      </button>
    </form>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const form = reactive({ code: '' })

        const findByCode = async () => {
            router.push(`/my-car/${form.code}`)
        }

        return {
            form, findByCode
        }
    }
}
</script>