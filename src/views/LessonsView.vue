<template>
    <div class="container">
        <h1>Крок 1.Сторінка вибору уроків</h1>
        <router-link :to="{ name: 'selectLessons' }" class="title">Перейти до вибору уроків</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'LessonsView',
}
</script>

<style lang="scss" scoped>
.title{
font-size: 25px;
color: cadetblue;
}
</style>
