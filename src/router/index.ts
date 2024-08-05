import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/login",
	},
	// {
	// 	path: "/index",
	// 	name: "Index",
	// 	component: () => import("@/views/index/index.vue"),
	// },
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
