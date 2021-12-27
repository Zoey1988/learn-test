import { mount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import * as vuex from 'vuex';
import LoginForm from '~/components/login-form/LoginForm.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('LoginForm', () => {
    // 🧭🧭 time: 10 minutes
    // 💰 1) mount LoginForm element with 1.proper data (valid username & password), 2.vuex plugin
    // 💰 2) mock store required mutations (login)
    // 💰 3) config store
    // 💰 4) submit form
    // 💰 5) check if login mutation has been triggerd
    // 💰 6) check if store state has been changed
    // 💰 7) destroy wrapper
});

// https://vue-test-utils.vuejs.org/guides/#mocking-route-and-router
// https://vue-test-utils.vuejs.org/guides/#testing-vuex-in-components





