import { z } from 'zod';

// Rules
const nullable = (name: string, max = 999, min = 0) =>
  z
    .string()
    .min(min, `${name} must be at least ${min} characters`)
    .max(max, `${name} must be at most ${max} characters`)
    .nullable()
    .optional();
const nullableNum = (name: string) =>
  z
    .number()
    .min(1900, `${name} must be after 1900`)
    .max(new Date().getFullYear(), `${name} cannot be in the future`)
    .nullable()
    .optional();
const required = (name: string, max = 999) =>
  z.string().min(1, `${name} is required`).max(max, `${name} must be at most ${max} characters`);
const email = (name = 'Email') => required(name, 100).email(`${name} is not valid`);
const password = (number = 6, name = 'Password') =>
  required(name).min(number, `${name} must be at least ${number} characters`);

// Validation Schemas
export const AuthSignUpSchema = z
  .object({
    email: email(),
    password: password(),
    confirm_password: password()
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirm_password'],
        message: 'The passwords did not match'
      });
    }
  });

export const AuthSignInSchema = z.object({
  email: email(),
  password: password()
});

export const ProfileSchema = z
  .object({
    display_name: required('Username'),
    first_name: required('First name'),
    last_name: nullable('Last name'),
    avatar_url: z.string().url('Avatar must be a valid URL').optional().or(z.literal(''))
  })
  .superRefine(({ display_name, last_name }, ctx) => {
    if (last_name && last_name !== null && display_name.includes(last_name)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Username should not contain personal information'
      });
    }
  });

export const RecordSchema = z.object({
  artist: required('Artist', 60),
  title: required('Title', 150),
  genre: nullable('Genre', 150),
  year: nullableNum('Year'),
  condition: nullable('Condition'),
  notes: nullable('Notes')
});

// Form Error Schemas
export interface IAuthSignUpErrors {
  email?: string;
  password?: string;
  confirm_password?: string;
}

export interface IAuthSignInErrors {
  email?: string;
  password?: string;
}

export interface IProfileErrors {
  display_name?: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
}

export interface IRecordErrors {
  title?: string;
  artist?: string;
  year?: string;
  genre?: string;
  condition?: string;
  notes?: string;
}
