<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';

import AlertMixin from '../mixins/alert.mixin.js';

export default {
  mixins: [
    AlertMixin
  ],
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle: 'Delete User?',
      alertIsVisible: true
    };
  }
};
</script>