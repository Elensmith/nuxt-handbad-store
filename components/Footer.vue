<template>
  <div class="footer">
    <ul class="footer__nav">
      <li class="footer__nav-link">Найти магазин</li>
      <li class="footer__nav-link">Клубная карта</li>
      <li class="footer__nav-link">Даставка/оплата</li>
      <li class="footer__nav-link">Подписаться на рассылку</li>
    </ul>
    <ul class="footer__links">
      <li
        class="footer__link"
        :style="{ backgroundImage: `url(./instagram.svg)` }"
      ></li>
      <li
        class="footer__link"
        :style="{ backgroundImage: `url(./facebook.svg)` }"
      ></li>
      <li
        class="footer__link"
        :style="{ backgroundImage: `url(./mail.svg)` }"
      ></li>
    </ul>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 18px 0 18px 0;
  background-color: #f8f8f8;
  color: black;
  justify-content: space-between;
  margin-top: 30px;
  border-top: 1px solid black;
}
.footer__nav {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0 0 0 88px;
}
.footer__links {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin-right: 88px;
}
.footer__link {
  width: 34px;
  height: 34px;
  background: no-repeat;
  cursor: pointer;
  margin-left: 15px;
}
.footer__nav-link {
  cursor: pointer;
  width: fit-content;
}
.footer__nav-link:hover {
  color: darkgray;
}
@media screen and (max-width: 882px) {
  .footer__links {
    margin-right: 30px;
  }
  .footer__nav {
    margin: 0 0 0 30px;
  }
}
@media screen and (max-width: 506px) {
  .footer {
    flex-direction: column;
  }
  .footer__links {
    margin-left: 16px;
  }
}
</style>
