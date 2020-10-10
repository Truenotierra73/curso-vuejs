<template>
  <section>
      <h2>{{ updatedName }}</h2>
      <h3>{{ updatedYear }} años</h3>
  </section>
</template>

<script>
export default {
    props: [
        'updatedName',
        'updatedYear'
    ]
}
</script>

<style>
</style>