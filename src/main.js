import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appname: 'AnalySoil'
	}
});

export default app;