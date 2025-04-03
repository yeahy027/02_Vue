import { createRouter, createWebHistory } from 'vue-router'; // 이 줄 추가

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import NotFound from '@/pages/NotFound.vue';

const membersIdGuard = (to, from) => {
  // members/:id 경로는 반드시 이전 경로가
  // /members, /members:id 인 경우만 내비게이션 허용함
  console.log(`이름은 : ${from.name}`);

  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', name: 'members', component: Members }, // name 속성 추가
    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: membersIdGuard,
    },
    { path: '/videos', component: Videos },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
});
export default router;
