import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from '@/views/PageNotFound.vue'
import SelectLessonsView from '@/views/SelectLessonsView.vue'
import SelectTeachersView from '@/views/SelectTeachersView.vue'
import StudyManagerView from '@/views/StudyManagerView.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/lessons",
    name: "lessons",
		meta:{requiresAuth:true},
   
    component: () =>
      import(/* webpackChunkName: "lessons" */ "../views/LessonsView.vue"),
			children:[
				{
					path: 'select',
					name: 'selectLessons',
					component: SelectLessonsView,
			},
			{
				path: ':id(\\d*)+',
				name: 'lessonsSelected',
				component: SelectTeachersView,
				

		},
				{
					path: ':id+',
					name: 'studyManager',
					component: StudyManagerView,
			},

	
			],
			
  },
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: PageNotFound,
	},
	{
		path: '/teachers',
		name: '/teachers',

		component: () => import('@/views/TeachersView'),
		meta:{requiresAuth:true},
},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginPage.vue'),
		meta: { requiresAuth: false },
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
	const isAuthenticated = window.userName
	if (to.meta.requiresAuth && !isAuthenticated) {
			return next({
					name: 'login',
					query: { redirect: to.fullPath },
			})
	}
	console.log('to.meta.requiresAuth:', to.meta.requiresAuth);
  console.log('isAuthenticated:', isAuthenticated);
	next()
})
export default router;
