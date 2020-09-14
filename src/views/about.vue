<template>
  <div>
    <div>
      <ol>
        <li v-for="data in Data" :key="data.id">
          {{ data.weight }}
          {{ data.word }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Data: []
    };
  },
  created() {
    // console.log(self);
    this.$http.get(" http://localhost:3333/contents").then(Response => {
      this.Data = Response.data;
    });
  }
};
</script>

<style></style>
