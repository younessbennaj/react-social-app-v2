import React from 'react';

//Redux 
import { connect } from 'react-redux';
import { addPost } from '../actions';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const PostBox = ({ addPost }) => {
    const formik = useFormik({
        initialValues: {
            body: ''
        },
        validationSchema: Yup.object({
            body: Yup.string()
                .max(145, 'Must be 145 characters or less')
                .required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            addPost(values)
            resetForm();
        },
    });
    return (
        <Card
            width={[1, 2 / 3, 1 / 2]}
            bg='white'
            sx={{
                mx: 'auto',
                my: 3,
                px: 3,
                borderRadius: 2,
                // boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
            }}>
            <Box
                as='form'
                onSubmit={formik.handleSubmit}
                py={3}>
                <Flex mx={-2} mb={3} flexDirection="column">
                    <Box px={2}>
                        <Textarea
                            id='body'
                            name="body"
                            placeholder="What's new ?"
                            {...formik.getFieldProps('body')}
                        />
                        {formik.touched.body && formik.errors.body ? (
                            <Box color="red">{formik.errors.body}</Box>
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

function mapStateToProps(state) {
    const { user } = state
    return user;
}

export default connect(mapStateToProps, {
    addPost
})(PostBox);