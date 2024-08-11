import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup.string()
        .email('Plece enter a valid email')
        .required('Email is required'),

    username: yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be 20 characters or less')
        .required('Username is required'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

export const loginSchema = yup.object().shape({
    email: yup.string()
        .email('Plece enter a valid email')
        .required('Email is required'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});