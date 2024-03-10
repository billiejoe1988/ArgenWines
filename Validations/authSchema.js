import { object, string, ref } from "yup";

export const registerSchema = object().shape({
    confirmPassword: string().required("Confirmation is required").oneOf([ref("password"), null], "Passwords do not match"),
    password: string().required("Password is required").min(6, "Minimum 6 characters"),
    email: string().required("Email is required").email("Invalid email format")
});

export const loginSchema = object().shape({
    password: string().required("Password is required").min(6, "Minimum 6 characters"),
    email: string().required("Email is required").email("Invalid email format")
});
