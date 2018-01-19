/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2018-01-17 15:44:45
 */

import Vue from 'vue/dist/vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './vuex';
import './stylesheet/index.sass';
import main from './views/main.vue';

Vue.use(ElementUI);

export default new Vue({
    store,
    render: c => c(main)
}).$mount('#app');