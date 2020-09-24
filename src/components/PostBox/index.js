import React, { useEffect } from 'react';
import axios from 'axios';

//Context
import { useUserState } from '../../user-context';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

import {
    Box,
    Image,
    Text,
    Button,
    Flex
} from 'rebass/styled-components'

import {
    Input,
} from '@rebass/forms/styled-components'

const PostInput = styled(Input)` 
    border-radius: 25px;
    height: 50px;
    padding: 0px 20px;
`
const PostButton = styled(Button)`
    border-radius: 25px;
    height: 40px;
    padding: 0px 15px;
`
const PostBox = ({ posts, setPosts }) => {

    const { credentials } = useUserState();

    const formik = useFormik({
        initialValues: {
            body: ''
        },
        validationSchema: Yup.object({
            body: Yup.string()
                .max(145, 'Must be 145 characters or less')
        }),
        onSubmit: (values, { resetForm }) => {
            axios.post("/post")
                .then(response => {
                    let newPosts = [response.data, ...posts];
                    setPosts(newPosts);
                    resetForm();
                })
        },
    });
    return (
        <Box
            as='form'
            onSubmit={formik.handleSubmit}
            p={3}>
            <Flex mx={-2} mb={3} flexDirection="column">
                <Box px={2}>
                    <Flex alignItems='center' py={3}>
                        <Image variant='avatar' minWidth='50px' src={credentials.imageUrl} />
                        <Text fontWeight="bold" pl={3}>{credentials.firstName} {credentials.lastName}</Text>
                    </Flex>
                    <PostInput
                        id='body'
                        name="body"
                        placeholder="What's on your mind?"
                        {...formik.getFieldProps('body')}
                    />
                    {formik.touched.body && formik.errors.body ? (
                        <Box color="red">{formik.errors.body}</Box>
                    ) : null}
                </Box>
                <Box pt={3} px={2} ml='auto'>
                    <PostButton type="submit">
                        Add Post
                        </PostButton>
                </Box>
            </Flex>
        </Box>
    );
};


export default PostBox;