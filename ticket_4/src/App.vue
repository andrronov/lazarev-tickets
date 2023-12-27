<script>
export default {
  name: 'App',
  data(){
    return {
      total: 0,
      itemList: [
        {
          name: 'Шоколад',
          price: 100,
          count: 0
        },
        {
          name: 'Печенье',
          price: 70,
          count: 0
        },
        {
          name: 'Сухарики',
          price: 15,
          count: 0
        },
        {
          name: 'Кока-кола',
          price: 65,
          count: 0
        },
        {
          name: 'Пельмени',
          price: 150,
          count: 0
        },
      ]
    }
  }
}
</script>

<template>
  <table border="1">
    <caption>Товарная накладная</caption>
    <tr>
     <th>Название</th>
     <th>Цена за единицу</th>
     <th>Количество</th>
     <th>Всего</th>
    </tr>
    <tr v-for="(item, index) in itemList" :key="index">
      <td>{{ item.name }}</td>
      <td>{{item.price}}</td>
      <td><Button @click="item.count --" :disabled="item.count < 1">-</Button>{{item.count}}<Button @click="item.count ++">+</Button></td>
      <td>{{ item.price * item.count }}</td>
    </tr>
   </table>
</template>

<style scoped>

</style>
