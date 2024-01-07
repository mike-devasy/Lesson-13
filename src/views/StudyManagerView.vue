<template>
    <div class="container">
        <p>Навчальний план</p>
        <div  class="container__body">
            <div v-for="id in studyPairsList" :key="id" class="container__item">
                <div class="container__elem">{{getSubjectById(id[0]).subject}}</div>
                <div class="container__elem">{{getTeachersById(id[2]).name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StudyManagerView',
    computed: {
        ...mapGetters(['getTeachersById', 'getSubjectById']),
        studyPairsList() {
            return this.$route.params.id
        },
 
    },
}
</script>

<style lang="scss" scoped>
p{
	font-size: 25px;
	letter-spacing: 3px;
	color:brown;
}
.container {
font-size: 20px;
&__body {
	padding-left: 200px;
	width: 400px;
	color:cornflowerblue;
}

&__item {
	display: flex;
	margin-bottom: 15px;
	justify-content: space-between;
}

 
}

</style>
