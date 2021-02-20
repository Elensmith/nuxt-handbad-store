<template>
  <div class="filter-component">
    <p>Сортировать по:</p>
    <select
      :value="selected"
      class="filter-component__choose"
      @input="$emit('selected-filter', $event.target.value)"
    >
      <option disabled value="">-</option>
      <option>цене</option>
      <option>популярности</option>
    </select>
  </div>
</template>

<style scoped>
.filter-component {
  display: flex;
  flex-direction: row;
  margin: 0 0 10px auto;
  justify-content: flex-end;
}
.filter-component__choose {
  outline: none;
  text-indent: 3px;
  margin-left: 3px;
}
</style>
