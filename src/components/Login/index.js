import React, { useState } from 'react';

import axios from "axios";

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

//Components
import { FormContainer } from '../../hoc/layout/element';
import { ErrorMessage } from '../ErrorMessage';

import {
    Box,
    Button,
    Flex,
    Text
} from 'rebass/styled-components'

import {
    Label,
    Input
} from '@rebass/forms/styled-components'

const Login = ({ history }) => {

    //UI State
    const [error, setError] = useState();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            axios.post('/login', values)
                .then(response => {
                    const FBIdToken = `Bearer ${response.data.token}`;
                    localStorage.setItem('FBIdToken', FBIdToken);
                    axios.defaults.headers.common['Authorization'] = FBIdToken;
                }, error => {
                    setError(error.response.data.general);
                })
        },
    });
    return (
        <FormContainer>
            <Box
                as='form'
                onSubmit={formik.handleSubmit}
                py={3}>
                <Text textAlign='center' variant="title">Login</Text>
                <Flex mx={-2} mb={3} flexDirection="column">
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
                        <Label py={1} htmlFor='password'>Password</Label>
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
                    <Box pt={3} px={2} ml='auto'>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Box>
                    {error ? (
                        <Box pt={3} px={2}>
                            <ErrorMessage>{error}</ErrorMessage>
                        </Box>
                    ) : null}
                </Flex>
            </Box>
        </FormContainer>
    );
};

export default Login;