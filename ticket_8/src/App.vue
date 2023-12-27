<script>
export default {
  name: 'App',
  data(){
    return {
      itemList: [
        {
          fio: 'Гречнев А. Л.',
          position: "Директор",
          salary: 10000
        },
        {
          fio: 'Урлумбов К. Ж.',
          position: "Оператор",
          salary: 1000
        },
        {
          fio: 'Зайнутдинов Н. Я.',
          position: "Врач",
          salary: 100000
        }
      ]
    }
  }
}
</script>

<template>
  <table border="1">
    <caption>Сотрудники</caption>
    <tr>
     <th>ФИО</th>
     <th>Должность</th>
     <th>Оклад</th>
    </tr>
    <tr v-for="(person, index) in itemList" :key="index">
      <td>{{ person.fio }}</td>
      <td>{{person.position}}</td>
      <td>{{ person.salary }}</td>
    </tr>
   </table>
</template>

<style scoped>

</style>
