import React, { useEffect } from 'react';

//Redux
import { connect } from 'react-redux';
import { signIn } from '../actions';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

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

//Error Message Component 

const ErrorMessage = styled(Box)({
    color: 'red',
    border: '1px solid red',
    borderRadius: '2px',
})

ErrorMessage.defaultProps = {
    bg: '#ffdce0',
    fontSize: 0,
    px: 2,
    py: 2,
};

const LoginForm = ({ signIn, error, auth: { loading }, history }) => {
    useEffect(() => {
        console.log(loading);
    }, [loading])
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
            signIn(values, history);
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
                {loading ? (<Text>Loading...</Text>) : null}
            </Box>

        </Card>
    );
};

const Login = ({ user, signIn, auth, history }) => {
    useEffect(() => {
    }, [user, auth]);
    return (
        <LoginForm history={history} auth={auth} signIn={signIn} error={auth.error} />
    );
};

function mapStateToProps(state) {
    const { user, auth } = state;
    //expected to return an object
    return { user, auth };
}

export default connect(mapStateToProps, {
    signIn
})(Login);