<template>
	<div class="container">
		<h1>Крок 2.Вибір вчителів:</h1>
<div class="container__lessons">
	<div v-for="(id, index) in  selectedLessonsId" :key="id" class="container__lesson">
{{ getSubjectById(id).subject }}
	<div>
		<select v-model="selectedTeachersId[index]">
		<option selected disabled >Не обрано</option>
		<option v-for="teachers in getTeachers" :key="teachers.id" :value="teachers.id">{{ teachers.name }}</option>
		</select>
	</div>
</div>
</div>
<button @click="onAction">Розпочати навчання</button>
    <p v-if="error" class="red">{{ errorMessage }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
	export default {
		name:'SelectTeachersView',
		data(){
			return{
				selectedTeachersId:[],
				error:false
			}
		},
		computed: {
	 ...mapGetters(['getSubjectById', 'getTeachers']),
	 selectedLessonsId(){
		return this.$route.params.id
	 },
	 isListValid(){
		console.log('this.selectedTeachersId', this.selectedTeachersId);
		if(this.selectedTeachersId.length >= this.selectedLessonsId.length){
			for(let i=0; i < this.selectedLessonsId.length; i++){
				if(this.selectedTeachersId[i] == undefined) return false
			}
			return true

		}
		return false
	 },
	 selectedIdList(){
		const selectedIdArray = []
		for(let i = 0; i < this.selectedLessonsId.length; i++){
			selectedIdArray[i] = `${this.selectedLessonsId[i]}-${this.selectedTeachersId[i]}`
		}
		return selectedIdArray
	 },
	 errorMessage() {
      return "Усі предмети мають бути з обраним вчителем";
    },
		},
		methods: {
			onAction() {
				console.log('isListValid:', this.isListValid);
				console.log('this.selectedIdList:', this.selectedIdList);
				if(this.isListValid){
					this.$router.push(
						{name:'studyManager',
					params:{
						id:this.selectedIdList
					}}
						)
				}
				else this.error = true;
			}
		},
	}
</script>

<style lang="scss" scoped>
.container{
	padding: 20px 50px;
font-size: 20px;
&__lessons{
width: 400px;

}
&__lesson{
	font-style: italic;
	display: flex;
	color:blue;
	justify-content: space-between;
	// text-align: left;
margin-bottom: 10px;
}
}
select{
	font-size: 20px;

	width: 200px;
	height: 30px;
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