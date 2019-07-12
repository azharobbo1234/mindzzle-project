import employee from './components/employee.vue';
import profile from './components/profile.vue';

const routes = [
    {path: '/', component: profile},
    {path: '/employee', component: employee},
];

export default routes;