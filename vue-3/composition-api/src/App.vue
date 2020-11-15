<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge()">Change Age</button>

    <!-- <input type="text" placeholder="First Name" @input="setFirstName">
    <input type="text" placeholder="Last Name" @input="setLastName"> -->
    <input type="text" placeholder="First Name" v-model="firstName" />
    <!-- <input type="text" placeholder="Last Name" v-model="lastName"> -->
    <input type="text" placeholder="Last Name" ref="lastNameInput" />
    <button @click="setLastName">Set Lastname</button>
  </section>
</template>

<script>
// ref --> se utiliza para cualquier tipo de variables, incluídos objetos. Para los objetos, se debe acceder con ´value.propertyName´
// reactive --> se utiliza únicamente para objetos.
import {
  ref,
  reactive,
  computed,
  watch,
  provide
} from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    'user-data': UserData
  },
  setup() {
    // const uName = ref('Agustín');
    const user = reactive({
      name: 'Agustín',
      age: 27
    });
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const age = ref(27);

    // setInterval(() => {
    //   if (uName.value === 'Agustín') {
    //     uName.value = 'Agu';
    //   } else {
    //     uName.value = 'Agustín';
    //   }
    // }, 2000);

    // setTimeout(() => {
    //   user.name = 'Agu';
    //   user.age = 28
    // }, 2000);

    // function setNewAge() {
    //   user.age = 28;
    // };

    const setNewAge = () => {
      age.value = 28;
      console.log(age);
    };

    // const setFirstName = (event) => {
    //   firstName.value = event.target.value;
    // };

    // const setLastName = (event) => {
    //   lastName.value = event.target.value;
    // };

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([firstName, lastName], (newValues, oldValues) => {
      console.log('New value first name: ' + newValues[0]);
      console.log('Old value first name: ' + oldValues[0]);
      console.log('New value last name: ' + newValues[1]);
      console.log('Old value last name: ' + oldValues[1]);
    });

    const setLastName = () => {
      console.log(lastNameInput);
      lastName.value = lastNameInput.value.value;
    };

    provide('userAge', age);

    return {
      userName: uName,
      user: user,
      setAge: setNewAge,
      // setFirstName,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    };
  }
  // data() {
  //   return {
  //     userName: 'Agustin',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
