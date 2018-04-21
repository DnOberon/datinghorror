import Vue from 'vue';
import Router from 'vue-router';
import Title from '../components/Title';
import FirstConversation from '../components/FirstConversation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title,
    },
    {
      path: '/first-conversation',
      name: 'First Conversation',
      component: FirstConversation,
    },
  ],
});
