import { mount, createLocalVue } from "@vue/test-utils";
import YInput from "~/components/globals/YInput.vue";

const localVue = createLocalVue();
// 💰 0) add required plugins (like BootstrapVue)

describe("YInput.vue", () => {
    test("mount", () => {
        // 🧭🧭 time: 5 minutes
        // 💰 1) mount YInput element
        // 💰 2) check if YInput component is mounted
        // 💰 3) destroy wrapper
    });
    test("test label", () => {
        // 🧭🧭 time: 10 minutes
        // 💰 1) mount YInput element
        // 💰 2) pass it required props (name, label, value)
        // 💰 3) find label element in the dom
        // 💰 4) check if label has proper text
        // 💰 5) check if label has the class "y-input-label"
        // 💰 6) destroy wrapper
    });
    test("test change input", async () => {
        // 🧭🧭 time: 10 minutes
        // 💰 1) mount YInput element
        // 💰 2) pass it required
        // 💰 3) set YInput a new value
        // 💰 5) check if input has proper value
        // 💰 6) destroy wrapper
    });
});

// https://vue-test-utils.vuejs.org/guides/#getting-started
// https://vue-test-utils.vuejs.org/api/wrapper/#wrapper
// https://vee-validate.logaretm.com/v3/advanced/testing.html#testing-caveats
