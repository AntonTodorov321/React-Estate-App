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
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
});

export const loginSchema = yup.object().shape({
    email: yup.string()
        .email('Plece enter a valid email')
        .required('Email is required'),

    password: yup.string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required')
});

export const editOrAddEstateSchema = yup.object().shape({
    typeOfEstate: yup.string().
        required('Please select a type of estate')
        .oneOf(['one-bedroom', 'maisonette', 'two-bedroom'], 'Invalid type of estate'),

    location: yup.string().
        required('Please select a location')
        .oneOf(['Manastirski Livadi', 'Lozenec', 'Iztok', 'Studentski Grad', 'Mladost'], 'Invalid location'),

    price: yup.number().positive('Price must be positive number').required('Please select a price'),

    currency: yup.string().required('Please select a currency')
        .oneOf(['lv', 'EUR'], 'Invalid currency'),

    size: yup.number().positive('Size must be a positive number').required('Please select a size'),

    floor: yup.number()
        .min(0, 'Floor must be greater than or equal to 0')
        .integer('Floors must be an integer')
        .max(19, 'Floor must be less than 20'),

    totalFloors: yup.number()
        .integer('Total floors must be an integer')
        .max(19, 'Total floors must be less than 20')
        .positive('Total floors must be a positive number')
        .test('is-greater-or-equal', 'Total floors must be greater than or equal to the floor',
            function (value) {
                const { floor } = this.parent;
                return value >= floor || !floor;
            }),

    heating: yup.string().oneOf(['TPP', 'Air conditioner', 'GAS'], 'Invalid heating'),

    typeOfBuilding: yup.string().oneOf(['brick', 'EPK', 'panel'], 'Invalid type of building'),

    contacts: yup.string().required('Phone number is required'),

    description: yup.string()
        .min(2, 'Description must be at lest 2 characters')
        .max(600, 'Description must be 600 characters or less')
});