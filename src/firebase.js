import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyDHIcAeQwnS8suOfAj0THmYwhWFIyy0eMs",
  authDomain: "virtual-mechanical-eb0a0.firebaseapp.com",
  projectId: "virtual-mechanical-eb0a0",
  storageBucket: "virtual-mechanical-eb0a0.appspot.com",
  messagingSenderId: "795499254641",
  appId: "1:795499254641:web:c5ade65801a1f05cd7dcd0"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const carsCollection = db.collection('cars')

export const createCar = car => {
  return carsCollection.add(car)
}

export const getCar = async id => {
  const car = await carsCollection.doc(id).get()
  return car.exists ? car.data() : null
}

export const updateCar = (id, car) => {
  return carsCollection.doc(id).update(car)
}

export const deleteCar = id => {
  return carsCollection.doc(id).delete()
}

export const getMyCarByCode = async code => {
  const arrayCars = []
  const myCarByCode = await carsCollection.where('code', '==', code).get();
  if (myCarByCode.empty) {
    alert('No matching documents.');
    return;
  } 
  myCarByCode.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    arrayCars.push(doc.id)
  });

  const id = arrayCars[0]
  console.log(arrayCars)
  console.log("IM THE ID FROM DOC ==>", id)
  return id
}


export const useLoadCars = () => {
  const cars = ref([])
  const close = carsCollection.onSnapshot(snapshot => {
    cars.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return cars
}
