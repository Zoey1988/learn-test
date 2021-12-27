import { extend } from "vee-validate";
import { required, min, alpha } from "vee-validate/dist/rules";

extend("alpha", {
    ...alpha,
    message: "This field must contain only letters."
});

extend("required", {
    ...required,
    message: "This field is required."
});

extend('min', {
    ...min,
    message: "This field must be at least 6 characters."
});
