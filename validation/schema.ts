import { number, object, string } from "yup";

export const RegisterSchema = object({
    username: string().required().label("User name").min(2).max(50),
    email: string().required().label("Email").email(),
    password: string().required().label("Password").min(8).max(50),
});

export const LoginSchema = object({
    email: string().required().label("Email").email(),
    password: string().required().label("Password").min(8).max(50),
});