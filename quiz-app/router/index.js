import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import QuizesView from '../src/views/QuizesView.vue';
import QuizView from '../src/views/QuizView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name: 'quizes',
      component: QuizesView
    },

    {
      path:"/:id",
      name: 'quiz',
      component: QuizView
    },
  ]
})

export default router;
