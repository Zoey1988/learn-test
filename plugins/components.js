import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from "vee-validate";
import YInput from '~/components/y-input/YInput'

const components = { ValidationObserver, ValidationProvider, YInput }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})