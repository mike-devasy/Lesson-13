<template>
  <nav class="container">
    <router-link to="/">Головна |</router-link> 
    <router-link to="/lessons">Уроки |</router-link>
    <router-link to="/teachers">Вчителі |</router-link>
		<router-link :to="{ name: 'login' }">{{  loginTitle }}</router-link> |
		<button v-if="getUserName" @click="onExit">Вийти</button>
  </nav>
  <router-view />
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getLoginStatus", "getUserName"]),
 
	loginTitle() {
		console.log('window.userName2', this.getUserName);
		
		return this.getUserName || 'Увійти';
    },
  },
	methods: {
		...mapActions(['onReset']),
		onExit() {
			window.userName = null
			this.onReset()
			this.$router.push({name:'home',
			meta:{requiresAuth:true},
		})
		}
	},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
 font-size: 20px;
 display: flex;
 gap: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
