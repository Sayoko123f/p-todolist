// CSS
import './app.css';

// Vue
import { createApp } from 'vue';
import RootComponent from './components/root.vue';
const app = createApp(RootComponent);
const vm = app.mount('#app');
