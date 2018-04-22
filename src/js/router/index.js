import Vue from 'vue';
import Router from 'vue-router';
import Title from '../components/Title';
import Conversation from '../components/Conversation';
import Ending from '../components/Ending';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title,
    },
    {
      path: '/conversation',
      name: 'Conversation',
      component: Conversation,
    },
    {
      path: '/ending',
      name: 'Ending',
      component: Ending,
    },
  ],
});
