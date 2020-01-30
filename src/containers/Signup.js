import React from 'react';

//Redux 
import { connect } from 'react-redux';
import { signUp } from '../actions';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

//Components
import { FormContainer } from '../hoc/layout/element';
import { ErrorMessage } from '../components/ErrorMessage';

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex
} from 'rebass/styled-components'

import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
} from '@rebass/forms/styled-components'

const SignupForm = ({ signUp, history, error }) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
            confirmPassword: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            signUp(values, history);
        },
    });
    return (
        <FormContainer>
            <Box
                as='form'
                onSubmit={formik.handleSubmit}
                py={3}>
                <Text textAlign='center' variant="title">Signup</Text>
                <Flex mx={-2} mb={3} flexDirection="column">
                    <Box p={2}>
                        <Label py={1} htmlFor="firstName">First Name</Label>
                        <Input
                            id='firstName'
                            name="firstName"
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <Box color="red">{formik.errors.firstName}</Box>
                        ) : null}
                    </Box>
                    <Box p={2}>
                        <Label py={1} htmlFor="lastName">Last Name</Label>
                        <Input
                            id='lastName'
                            name="lastName"
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <Box color="red">{formik.errors.lastName}</Box>
                        ) : null}
                    </Box>
                    <Box p={2}>
                        <Label py={1} htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='john@example.com'
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <Box color="red">{formik.errors.email}</Box>
                        ) : null}
                    </Box>
                    <Box p={2}>
                        <Label py={1} htmlFor='name'>Password</Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <Box color="red">{formik.errors.password}</Box>
                        ) : null}
                    </Box>
                    <Box p={2}>
                        <Label py={1} htmlFor='name'>Confirm Password</Label>
                        <Input
                            id='confirmPassword'
                            name='confirmPassword'
                            type='password'
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <Box color="red">{formik.errors.confirmPassword}</Box>
                        ) : null}
                    </Box>
                    <Box pt={3} px={2} ml='auto'>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Box>
                    {error ? (
                        <Box pt={3} px={2}>
                            <ErrorMessage>{error[Object.keys(error)[0]]}</ErrorMessage>
                        </Box>
                    ) : null}
                </Flex>
            </Box>
        </FormContainer>
    );
};

const Signup = ({ users, signUp, history, auth }) => {
    return (
        <SignupForm history={history} signUp={signUp} error={auth.error} />
    );
};

function mapStateToProps(state) {
    const { users, auth } = state;
    return { users, auth };
}
export default connect(mapStateToProps, {
    signUp
})(Signup);