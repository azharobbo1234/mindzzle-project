import employee from './components/employee.vue';
import profile from './components/profile.vue';
import jobsearch from './components/jobsearch.vue';

const routes = [
    {path: '/', component: profile},
    {path: '/employee', component: employee},
    {path: '/jobsearch', component: jobsearch}
];

export default routes;