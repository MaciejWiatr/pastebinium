import { apolloClient } from "./lib/apollo";
import { createApp, h, provide } from "vue";
import App from "./App.vue";
import "./index.css";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: "/", component: Home }],
});

const app = createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},
	render: () => h(App),
});

app.use(router).mount("#app");
