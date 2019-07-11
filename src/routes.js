import employee from './components/employee.vue';
import tugas_pertama from './components/tugas-pertama.vue';

const routes = [
    {path: '/', component: tugas_pertama},
    {path: '/employee', component: employee},
];

export default routes;