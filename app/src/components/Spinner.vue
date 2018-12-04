<template>
  <div class="container">
    <div class="center">
      <font-awesome-icon class="spinner" icon="spinner" spin/>
    </div>
  </div>
</template>

<script>
</script>

<style>
.container {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 255, 0.5);
}
.center {
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
}
.spinner {
  font-size: 7em;
  text-align: center;
}
</style>
