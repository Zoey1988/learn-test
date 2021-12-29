import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from "vee-validate";

const components = { ValidationObserver, ValidationProvider }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})