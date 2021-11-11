<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Estado de servicio</th>
          <th scope="col">Codigo de Gestion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, brand, model, status, code } in cars" :key="id">
          <td>{{ brand }}</td>
          <td>{{ model }}</td>
          <td>{{ status }}</td>
          <td>{{ code }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteCar(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadCars, deleteCar } from '@/firebase'

export default {
  setup() {
    const cars = useLoadCars()
    return { cars, deleteCar }
  }
}
</script>
