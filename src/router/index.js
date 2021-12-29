import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import MRoom from '@/components/page/MRoom';
import CustomInfo from '@/components/page/CustomInfo';
import Appointment from '@/components/page/Appointment';
import Notice from '@/components/page/Notice';
import InputInfo from '@/components/page/InputInfo';
import MStatus from '@/components/page/MStatus';
import TodoList from '@/components/page/TodoListPage';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/InputInfo',
          component:InputInfo
        },{
          path:'/MStatus',
          component:MStatus
        },{
          path:'/MRoom',
          component:MRoom
        },{
          path:'/CustomInfo',
          component:CustomInfo
        },{
          path:'/Appointment',
          component:Appointment
        },{
          path:'/Notice',
          component:Notice
        },{
          path:'/TodoList',
          component:TodoList
        }
        

      ]
    }
  ]
})
