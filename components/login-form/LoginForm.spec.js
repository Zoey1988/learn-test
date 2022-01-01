import { mount, createLocalVue, config } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import flushPromises from 'flush-promises';
import Vuex from 'vuex';
import LoginForm from '~/components/login-form/LoginForm.vue';
import YInput from '~/components/globals/YInput.vue'
import componentsPlugin from '~/plugins/components';
import veeValidatePlugin from '~/plugins/vee-validate';

// 💰 0-1) create local Vue and add plugins (dont forget Vuex)
const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(componentsPlugin);
localVue.use(veeValidatePlugin);
localVue.use(Vuex);

// 💰 0-2) add YInput component to config stubs
config.stubs['y-input'] = YInput;

test('LoginForm', async () => {
    // 🧭🧭 time: 10 minutes
    // 💰 1) mount LoginForm element with 1.proper data (valid username & password), 2.vuex plugin
    // 💰 2) mock store required actions (login)
    // 💰 3) config store
    jest.useFakeTimers();
    const actions = {
        login: jest.fn(),
    };
    const store = new Vuex.Store({
        actions,
    });
    const wrapper = mount(LoginForm, {
        data() {
            return {
                username: 'validUsername', 
                password: 'vlalidPassword',
            };
        },
        store,
        localVue,
        mocks: {
            $router: {
                push: jest.fn(),
            }
        }
    });
    // 💰 4) submit form
    jest.runAllTimers();
    await wrapper.find('button').trigger('submit');
    await flushPromises();
    jest.advanceTimersByTime(1000);
    // 💰 5) check if login mutation has been triggerd
    expect(actions.login).toHaveBeenCalled();
    // 💰 6) destroy wrapper
    wrapper.destroy();
});

// https://vue-test-utils.vuejs.org/guides/#mocking-route-and-router
// https://vue-test-utils.vuejs.org/guides/#testing-vuex-in-components
// https://vee-validate.logaretm.com/v3/advanced/testing.html#testing-validationobserver-debounced-state
// https://jestjs.io/docs/timer-mocks
