<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  components: {
    New,
  },
  data() {
    return {
      key: value,
    };
  },
  created() {},
  computed: {
    name() {
      return this.data;
    },
  },
  methods: {
    name() {},
  },
};
</script>

<style lang="scss" scoped>
</style>