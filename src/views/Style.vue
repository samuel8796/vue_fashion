<template>
  <div id="style">
    <div class="jumbotron">
      <div class="container">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="KEYWORD"
            aria-label="Recipient's username with two button addons"
            aria-describedby="button-addon4"
            v-model="input"
          />
          <div id="app" class="input-group-append">
            <b-form-group class="input-group-append">
              <b-form-checkbox-group
                v-model="group"
                :options="options"
                name="buttons-1"
                buttons
              ></b-form-checkbox-group>
            </b-form-group>
            <!-- <div>group = {{ group }}</div> -->
          </div>
        </div>
        <br />
        <div id="searchst">
          <button href="" class="btn" v-on:click="search">
            Search for new Style
          </button>
        </div>
        <div>input = {{ input }}</div>
        <div>
          <ol>
            <li v-for="data in Data" :key="data.id">
              {{ data.weight }}
              {{ data.word }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#style .btn-outline-secondary {
  color: #6c757d;
  border-color: #ced4db;
  background-color: white;
}

#style .jumbotron {
  background-color: rgb(255, 255, 255);
  height: 60vh;
}

#searchst button {
  background: rgb(192, 174, 142);
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
}

#style .container {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
<script>
export default {
  data() {
    return {
      input: "",
      contents: [],
      group: [],
      options: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" }
      ]
    };
  },
  methods: {
    search() {
      if (!this.input) return false;
      this.$http
        .post(" http://localhost:3333/contents", { word: this.input })
        .then(Response => {
          this.input = " ";
          this.contents.push(Response.data);
        });
    }
  },
  mounted() {
    this.$http.get(" http://localhost:3333/contents").then(Response => {
      this.contents = Response.data;
    });
  }
};
</script>
