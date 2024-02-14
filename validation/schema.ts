import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

// export const RegisterSchema = object({
//     username: string().required().label("User name").min(2).max(50),
//     email: string().required().label("Email").email(),
//     password: string().required().label("Password").min(8).max(50),
// });

export const RegisterSchema = toTypedSchema(
    zod.object({
        username: zod.string().nonempty({ message: 'Username required' }).max(40, { message: 'Too long' }),
        email: zod.string().nonempty({ message: 'Email required' }).email({ message: 'Must be a valid email' }),
        password: zod.string().nonempty({ message: 'Password required' }).min(4, { message: 'Too short' }),
    })
);

export const LoginSchema = toTypedSchema(
    zod.object({
        email: zod.string().nonempty({ message: 'Email required' }).email({ message: 'Must be a valid email' }),
        password: zod.string().nonempty({ message: 'Password required' }).min(4, { message: 'Too short' }),
    })
);