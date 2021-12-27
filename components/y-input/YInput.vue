<template>
    <validation-provider 
        v-slot="validationContext"
        :name="name"
        :rules="rules"
    >
        <b-form-group :label="label" :label-for="`${name}-${uuid}`" label-class="y-input-label">
            <b-form-input
                :id="`${name}-${uuid}`"
                :value="value"
                :name="name"
                :type="type"
                :state="getValidationState(validationContext)"
                :aria-describedby="`${name}-${uuid}-feedback`"
                @input="newValue => $emit('update:value', newValue)"
            />
            <b-form-invalid-feedback :id="`${name}-${uuid}-feedback`">
                {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
    </validation-provider>
</template>

<script>
import { v4 } from 'uuid';

export default {
    name: 'YInput',
    props: {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        rules: {
            type: [Object, String],
            default: () => '',
        },
    },
    data: () => ({
        uuid: v4(),
    }),
    computed: {
        inputId() {
            return this.id || this.uuid;
        },
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
    },
};
</script>

<style>

</style>