<template>
  <div class="navbar">
    <h1 class="navbar__title">Каталог</h1>
    <ul class="navbar__items">
      <li class="navbar__item">
        <nuxt-link
          active-class="navbar__link_active"
          class="navbar__link"
          to="/backpacks"
        >
          Рюкзаки
        </nuxt-link>
      </li>
      <li class="navbar__item">
        <nuxt-link
          active-class="navbar__link_active"
          class="navbar__link"
          to="/tshirts"
        >
          Футболки
        </nuxt-link>
      </li>
      <li class="navbar__item">
        <nuxt-link
          active-class="navbar__link_active"
          class="navbar__link"
          to="/shirts"
        >
          Рубашки
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  margin-left: 88px;
  width: 156px;
}
.navbar__items {
  margin-top: 24px;
  list-style-type: none;
  padding: 0;
}
.navbar__title {
  font-size: 30px;
}
.navbar__link {
  color: #959dad;
  text-decoration: none;
}
.navbar__link:hover {
  color: #59606d;
}
.navbar__link_active {
  text-decoration-line: underline;
  color: #1f1f1f;
}
.navbar__item {
  margin-bottom: 19px;
}
</style>
