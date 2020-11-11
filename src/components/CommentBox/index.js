import React from 'react';
import axios from 'axios';

//Redux 
import { connect } from 'react-redux';
import { addComment } from '../../actions';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    Box,
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

const CommentBox = ({ closeModal, postId }) => {
    const formik = useFormik({
        initialValues: {
            body: ''
        },
        validationSchema: Yup.object({
            body: Yup.string()
                .max(145, 'Must be 145 characters or less')
        }),
        onSubmit: (values, { resetForm }) => {

            axios.post(`/post/${postId}/comment`, values)
                .then(response => {
                    //Increment 
                    console.log("increment comment count");
                })
            resetForm();
            closeModal.current.closeModal();
        },
    });
    return (
        <Box
            as='form'
            onSubmit={formik.handleSubmit}
        >
            <Flex justifyContent="center">
                <Text p={3} fontWeight="bold" fontSize={3}>Add a comment</Text>
            </Flex>
            <Flex mx={-2} mb={3} flexDirection="column">
                <Box px={2}>
                    <Textarea
                        id='body'
                        name="body"
                        placeholder="Post your comment"
                        {...formik.getFieldProps('body')}
                        borderRadius="8px"
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
    );
}

export default CommentBox;