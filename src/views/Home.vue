<template>
  <div id="home">
    <div class="jumbotron">
      <div class="container">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="KEYWORD"
            aria-label="Recipient's username with two button addons"
            aria-describedby="button-addon4"
          />
          <div id="app" class="input-group-append">
            <b-form-group class="input-group-append ">
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
        <div id="search">
          <button href="" class="btn">單品推薦</button>
          <button href="" class="btn">風格推薦</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#home .btn-outline-secondary {
  color: #6c757d;
  border-color: #ced4db;
  background-color: white;
}

#home .jumbotron {
  background-color: rgb(255, 255, 255);
  height: 60vh;
}

#search button {
  background: rgb(192, 174, 142);
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
}

#home .container {
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
      group: [],
      options: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" }
      ]
    };
  }
};
</script>
