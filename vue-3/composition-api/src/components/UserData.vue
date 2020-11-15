<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);

    onBeforeMount(() => {
        console.log('OnBeforeMount');
    });

    onMounted(() => {
        console.log('OnMounted');
    });
    
    onBeforeUpdate(() => {
        console.log('OnBeforeUpdate');
    });

    onUpdated(() => {
        console.log('OnUpdated');
    });

    onBeforeUnmount(() => {
        console.log('OnBeforeUnmount');        
    });

    onUnmounted(() => {
        console.log('OnUnmounted');
    });

    const age = inject('userAge');

    return {
      userName: uName,
      age
    };
  }
};
</script>

<style></style>
