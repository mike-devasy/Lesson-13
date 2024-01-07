import { createStore } from "vuex";

export default createStore({
  state: {
		loginStatus: false,
    userInfo: { name: "admin", password: "admin" },
		userName:null,
    subjects: [
      { id: 1, subject: "Математика" },
      { id: 2, subject: "Інформатика" },
      { id: 3, subject: "Хімія" },
      { id: 4, subject: "Фізика" },
      { id: 5, subject: "Німецька мова" },
      { id: 6, subject: "Англійська мова" },
      { id: 7, subject: "Література" },
    ],
    teachers: [
      { id: 1, name: "Світлана В." },
      { id: 2, name: "Інна М." },
      { id: 3, name: "Олександр Ф." },
      { id: 4, name: "Антон Ж." },
      { id: 5, name: "Марина М." },
    ],
	},
  getters: {
		getSubjects:(state) => state.subjects,
		getTeachers:(state) => state.teachers,
		getSubjectById: (state) => (subjectId) => state.subjects.find((subject) => subject.id == subjectId),
		getTeachersById: (state) => (teachersId) => state.teachers.find((teachers) => teachers.id == teachersId),
		getLoginStatus: (state) => state.loginStatus,
		getUserName:(state) => state.userName
		// getUserInfo: (state) => state.userInfo,
	},
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
		updateUserName(state){
			state.userName = null
		}
	},
  actions: {
    login({ commit }, userName) {
      // Perform additional logic if needed
      commit('setUserName', userName);
    },
		onReset({commit}){
			commit('updateUserName')
		}
	},
  modules: {},
});
