<template>
	<div class="container">
		<p>Виберіть уроки:</p>
		<div class="lessons">
	<div v-for="{id, subject} in getSubjects" :key="id" class="lesson">{{ subject }}
	<input  v-model="selectedSubjects" type="checkbox" :value="id"></div>
</div>
<button @click="onSelectLesson">Вибрати вчителів</button>
<div v-if="error" class="error">{{ errorMessage }}</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

	export default {
		name:'SelectLessonsView',
		data(){
			return{
				selectedSubjects:[],
			error :false,
			}
		},
		computed:{
			...mapGetters(['getSubjectById', 'getSubjects']),
			errorMessage(){
				return 'Виберіть хоча б один урок!'
			}
		},
		methods: {
			onSelectLesson() {
				console.log('selectedSubjects', this.selectedSubjects);
				
				if(this.selectedSubjects.length){
			this.$router.push({
				name:'lessonsSelected',
				params:{
					id: this.selectedSubjects
				}
			})}
			else {
				this.error = true
			};

			}
		},
	}
</script>

<style lang="scss" scoped>
p{
	font-size: 25px;
	letter-spacing: 5px;
}
.container{
	padding: 20px 50px;
font-size: 20px;

}
.lessons{
width: 300px;
}
.lesson{
	font-style: italic;
	display: flex;
	color:blue;
	justify-content: space-between;
	// text-align: left;
margin-bottom: 10px;
}
input{
	width: 20px;
	height: 20px;
}
button{
	margin-top: 20px;
	height: 30px;
	padding-left: 40px;
	padding-right: 40px;
	font-size: 20px;
	border-radius: 5px;
	border:none;
	background-color: rgba(0, 255, 255, 0.564);
	transition: all 0.3s ease 0s;
	color:blue;
	font-style: italic;
	&:hover{
	background-color: rgba(88, 212, 212, 0.564);
cursor: pointer;
color:blueviolet;
	}
}
</style>