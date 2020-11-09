<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData($event)"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    'coach-form': CoachForm
  },
  methods: {
    saveData(coachData) {
      this.$store.dispatch('coaches/registerCoach', coachData);
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>

</style>
