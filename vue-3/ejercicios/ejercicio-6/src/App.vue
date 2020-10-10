<template>
  <section>
      <active-user :updated-name="name" :updated-year="year"></active-user>
      <user-data @name="nameUpdate($event)" @year="yearUpdate"></user-data>
  </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default {
    components: {
        'active-user': ActiveUser,
        'user-data': UserData
    },
    data() {
        return {
            name: 'Agustin Bollati',
            year: 28
        };
    },
    methods: {
        nameUpdate(event) {
            this.name = event;
            console.log(this.name);
        },
        yearUpdate(year) {
            this.year = year;
            console.log(this.year);
        }
    }
}
</script>

<style>
section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
}
</style>