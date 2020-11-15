<template>
  <h2>My Course Goal - Composition API</h2>
  <!-- Separate refs -->
  <h3 v-if="showGoal">{{ outputCourseGoal }}</h3>
  <!-- Ref Object -->
  <h3 v-if="outputCourseGoalRefObject.show">{{ outputCourseGoalRefObject.goal }}</h3>
  <!-- Reactive Object -->
  <h3 v-if="outputCourseGoalReactiveObject.show">{{ outputCourseGoalReactiveObject.goal }}</h3>
  <button @click="toggleShowGoal()">Toggle Goal</button>
  <hr>
  <h2>My Course Goal - Options API</h2>
  <h3 v-if="outputGoal.show">{{ outputGoal.goal }}</h3>
  <button @click="show()">Toggle Goal</button>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  // Composition API
  setup() {
    // Separate refs
    const outputCourseGoal = ref('OUTPUT COURSE GOAL - SEPARATE REFS');
    const showGoal = ref(true);

    // Ref Object
    const outputCourseGoalRefObject = ref({
      goal: 'OUTPUT COURSE GOAL - REF OBJECT',
      show: true
    });

    // Reactive Object
    const outputCourseGoalReactiveObject = reactive({
      goal: 'OUTPUT COURSE GOAL - REACTIVE OBJECT',
      show: true
    });

    const toggleShowGoal = () => {
      showGoal.value = !showGoal.value;
      outputCourseGoalRefObject.value.show = !outputCourseGoalRefObject.value.show;
      outputCourseGoalReactiveObject.show = !outputCourseGoalReactiveObject.show;
    };

    return {
      outputCourseGoal: outputCourseGoal,
      showGoal: showGoal,
      toggleShowGoal: toggleShowGoal,
      outputCourseGoalRefObject: outputCourseGoalRefObject,
      outputCourseGoalReactiveObject: outputCourseGoalReactiveObject
    };
  },
  // Options API
  data() {
    return {
      outputGoal: {
        goal: 'OUTPUT COURSE GOAL',
        show: true
      }
    };
  },
  methods: {
    show() {
      this.outputGoal.show = !this.outputGoal.show;
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>