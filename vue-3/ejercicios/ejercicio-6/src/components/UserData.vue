<template>
  <section>
    <input type="text" placeholder="Nombre" v-model="name"/>
    <button @click="emitName">Actualizar nombre</button>
    <br>
    <input type="number" placeholder="Edad" v-model.number="year"/>
    <button @click="emitYear">Actualizar edad</button>
    <br>

  </section>
</template>

<script>
export default {
  emits: ["name", "year"],
  data() {
    return {
        name: null,
        year: null
    };
  },
  methods: {
      emitName() {
        this.$emit('name', this.name);
      },
      emitYear() {
        this.$emit('year', this.year);
      }
  },
};
</script>

<style></style>
