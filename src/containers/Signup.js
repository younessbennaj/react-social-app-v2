import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import preset from '@rebass/preset'

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

const SignupForm = () => {
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
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Card
            width={[1, 2 / 3, 1 / 2]}
            sx={{
                mx: 'auto',
                px: 3,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
            }}>
            <Box
                as='form'
                onSubmit={formik.handleSubmit}
                py={3}>
                <Flex mx={-2} mb={3} flexDirection="column">
                    <Box px={2}>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id='firstName'
                            name="firstName"
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <Box color="red">{formik.errors.firstName}</Box>
                        ) : null}
                    </Box>
                    <Box px={2}>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id='lastName'
                            name="lastName"
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <Box color="red">{formik.errors.lastName}</Box>
                        ) : null}
                    </Box>
                    <Box px={2}>
                        <Label htmlFor='location'>Gender</Label>
                        <Select
                            id='gender'
                            name='gender'
                            defaultValue='Gender'>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                    </Box>
                    <Box px={2}>
                        <Label htmlFor='email'>Email</Label>
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
                    <Box px={2}>
                        <Label htmlFor='name'>Password</Label>
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
                    <Box px={2}>
                        <Label htmlFor='name'>Confirm Password</Label>
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
                </Flex>
            </Box>
        </Card>
    );
};

const Signup = () => {
    return (
        <SignupForm />
    );
};
export default Signup;