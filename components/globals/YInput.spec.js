import { mount, createLocalVue, enableAutoDestroy } from "@vue/test-utils";
import flushPromises from 'flush-promises';
import { BootstrapVue } from 'bootstrap-vue';
import YInput from "~/components/globals/YInput.vue";
import componentsPlugin from "~/plugins/components";
import veeValidatePlugin from '~/plugins/vee-validate';

const localVue = createLocalVue();
// 💰 0) add required plugins (like BootstrapVue)
localVue.use(BootstrapVue);
localVue.use(componentsPlugin);
localVue.use(veeValidatePlugin);

enableAutoDestroy(afterEach);

describe("YInput.vue", () => {
    it("test if component mounted", () => {
        // 🧭🧭 time: 5 minutes
        // 💰 1) mount YInput element
        const value = "";
        const wrapper = mount(YInput, {
            propsData: {
                name: 'test-name',
                label: 'test-label',
                value,
            },
            localVue
        });
        // 💰 2) check if YInput component is mounted
        expect(wrapper.vm).toBeTruthy();
        // 💰 3) destroy wrapper
        // we did it by use enableAutoDestroy(afterEach);
    });
    it("test component label", () => {
        // 🧭🧭 time: 10 minutes
        // 💰 1) mount YInput element
        // 💰 2) pass it required props (name, label, value)
        const value = "";
        const wrapper = mount(YInput, {
            propsData: {
                name: 'test-name',
                label: 'test-label',
                value,
            },
            localVue,
        });
        // 💰 3) find label element in the dom
        const label = wrapper.find('label');
        expect(label.exists()).toBe(true);
        // 💰 4) check if label has proper text
        expect(label.text()).toBe('test-label');
        // 💰 5) check if label has the class "y-input-label"
        expect(label.classes()).toContain('y-input-label');
        // 💰 6) destroy wrapper
        // we did it by use enableAutoDestroy(afterEach);
    });
    it("test change input", async () => {
        // 🧭🧭 time: 10 minutes
        // 💰 1) mount YInput element
        // 💰 2) pass it required props
        const value = "";
        const wrapper = mount(YInput, {
            propsData: {
                name: 'test-name',
                label: 'test-label',
                value,
            },
            localVue
        });
        // 💰 3) set YInput a new value
        const input = wrapper.find("input");   
        await input.setValue('test-input-value')
        // 💰 5) check if input has proper value
        expect(input.element.value).toBe("test-input-value");
        // 💰 6) destroy wrapper
        // we did it by use enableAutoDestroy(afterEach);
    });
    it("test rules", async () => {
        // 🧭🧭 time: 10 minutes
        // 💰 0) you must add veeValidate plugin for this test
        // 💰 1) mount YInput element
        // 💰 2) pass it required props
        const wrapper = mount(YInput, {
            propsData: {
                name: 'test-name',
                label: 'test-label',
                value: '',
            },
            localVue
        });
        // 💰 3) set 'rules' prop like: ```:rules="{ required: true, alpha: true, min: 6 }"```
        await wrapper.setProps({ rules: { required: true, alpha: true, min: 6 } })
        // 💰 4) set YInput value an invalid value
        // 💰 5) flush promises
        // 💰 6) check if proper error has been shown
        // 💰 7) destroy wrapper
        // we did it by use enableAutoDestroy(afterEach);
    });
});

// https://vue-test-utils.vuejs.org/guides/#getting-started
// https://vue-test-utils.vuejs.org/api/wrapper/#wrapper
// https://vee-validate.logaretm.com/v3/advanced/testing.html#testing-caveats
