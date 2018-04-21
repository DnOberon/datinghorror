import Vue from 'vue';
import Router from 'vue-router';
import Title from '../components/Title';
import FirstConversation from '../components/FirstConversation';
import GoodEnding from '../components/GoodEnding';
import BadEnding from '../components/BadEnding';
import NeutralEnding from '../components/NeutralEnding';

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
    {
      path: '/ending/good',
      name: 'Good Ending',
      component: GoodEnding,
    },
    {
      path: '/ending/neutral',
      name: 'Neutral Ending',
      component: NeutralEnding,
    },
    {
      path: '/ending/bad',
      name: 'Bad Ending',
      component: BadEnding,
    },
  ],
});
