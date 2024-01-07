<template>
    <div class="container">
			<div class="container__item">
					User name
					<input v-model="userName" type="text" />
			</div>
			<div class="container__item">
					Password
					<input v-model="password" type="password" />
			</div>
			<button @click="onLogin">Login</button>
		</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'LoginPage',

    data() {
        return {
            userName: null,
            password: null,
        }
    },
		computed:{
		},
    methods: {
...mapActions(['login']),

        onLogin() {
					this.login(this.userName);
            //--- перевірка правильності  ----
            window.userName = this.userName
					console.log('window.userName', window.userName);

            if (this.$route.query.redirect)
                this.$router.push({
                    path: this.$route.query.redirect,
                })
            else this.$router.push({ path: '/' })
        },
    },
}
</script>

<style lang="scss" scoped>
.container{
	font-size: 20px;
	padding:50px;
	width: 330px;
display: flex;
flex-direction: column;
gap: 20px;
// justify-content:space-between;
// align-items: center;
&__item{
display: flex;
justify-content: space-between;
}
}
input{
display: inline-block;
width: 220px;
}
button{
	height: 30px;
	font-size: 20px;
	border-radius: 5px;
	border:none;
	background-color: rgba(0, 255, 255, 0.564);
	transition: all 0.3s ease 0s;
	&:hover{
	background-color: rgba(88, 212, 212, 0.564);
cursor: pointer;
	}
}
</style>
