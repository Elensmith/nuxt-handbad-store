<template>
  <div class="welcome">
    <img src="/main_image.jpg" class="welcome__image" />
    <p class="welcome__title">TestList</p>
  </div>
</template>

<style scoped>
.welcome {
  align-items: center;
  position: relative;
  max-width: 1104px;
  max-height: 815px;
  margin-right: 80px;
}
.welcome__image {
  width: 100%;
  height: 100%;
}
.welcome__title {
  position: absolute;
  font-size: 80px;
  font-weight: 900;
  top: 15%;
  left: 15%;
}
</style>
