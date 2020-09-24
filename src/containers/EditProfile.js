import React, { useEffect, useState } from 'react';
import axios from "axios";

//Context
import { useUserState, useUserSetState } from '../user-context';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

//Style
import styled from 'styled-components';

import {
    Box,
    Image,
    Text,
    Button,
    Flex,
    Link
} from 'rebass/styled-components'

import {
    Label,
    Input
} from '@rebass/forms/styled-components'

const EditProfile = ({ closeModal }) => {

    const { credentials } = useUserState();
    const setUser = useUserSetState();

    //During the first rendering bio, location and website of credentials will
    //be undefined.
    //Because of that, the input field will become uncontrolled.
    //Once we receive this property (async api call), our state will be updated 
    //and credentials in our context too. 
    //And at that time the input field gets converted into a controlled component;
    // that's why you are getting the error: 'A component is changing an uncontrolled input of type text 
    //to be controlled.
    //Solution: We define an empty string as default value for bio, location and website.
    const { bio = '', location = '', website = '', imageUrl = '' } = credentials;

    const formik = useFormik({
        initialValues: { bio, location, website },
        enableReinitialize: true,
        validationSchema: Yup.object({
            bio: Yup.string()
                .max(160, 'Must be 160 characters or less'),
            location: Yup.string()
                .max(30, 'Must be 30 characters or less'),
            website: Yup.string().url()
                .max(100, 'Must be 100 characters or less')
        }),
        onSubmit: values => {

            //Edit profile image 
            if (file) {
                const formData = new FormData();
                formData.append('image', file, file.name);
                // editUserImage(formData);
                axios.post("user/image")
                    .then(response => {
                        //update user from server
                    })
            }

            //Edit profile details
            axios.post("/user")
                .then(response => {
                    setUser(response.data);
                    //update user from server
                })
            closeModal.current.closeModal();
        }
    });

    const [file, setFile] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    useEffect(() => {
        setImagePreviewUrl(imageUrl);
    }, [credentials])

    const handleImageChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        const image = event.target.files[0];
        reader.onloadend = () => {
            setFile(image)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(image)
    }

    const editProfileImage = (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('imageUrl');
        fileInput.click();
    }

    return (
        <Box
            as='form'
            onSubmit={formik.handleSubmit}
        >
            <Flex mx={-2} mb={3} flexDirection="column">
                {/* <ImageUpload /> */}
                <Flex justifyContent="center">
                    <Text p={3} fontWeight="bold" fontSize={3}>Edit Profile</Text>
                </Flex>
                <Flex px={2} justifyContent="center">
                    <Link href="#" onClick={editProfileImage}>
                        <Image variant="avatarLg" width="100px" src={imagePreviewUrl} />
                    </Link>
                    <input
                        id='imageUrl'
                        name='imageUrl'
                        type="file"
                        onChange={handleImageChange}
                        hidden="hidden"
                    />
                    {/* <Button onClick={editProfileImage}>Upload Image</Button> */}
                </Flex>
                <Box p={2}>
                    <Label htmlFor='bio'>Bio</Label>
                    <Input
                        value={formik.values.bio}
                        id='bio'
                        name='bio'
                        placeholder='Add biography'
                        {...formik.getFieldProps('bio')}
                    />
                    {formik.touched.bio && formik.errors.bio ? (
                        <Box color="red">{formik.errors.bio}</Box>
                    ) : null}
                </Box>
                <Box p={2}>
                    <Label htmlFor='location'>Location</Label>
                    <Input
                        id='location'
                        name='location'
                        placeholder='Add location'
                        {...formik.getFieldProps('location')}
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <Box color="red">{formik.errors.location}</Box>
                    ) : null}
                </Box>
                <Box p={2}>
                    <Label htmlFor='website'>website</Label>
                    <Input
                        id='website'
                        name='website'
                        placeholder='Add website'
                        {...formik.getFieldProps('website')}
                    />
                    {formik.touched.website && formik.errors.website ? (
                        <Box color="red">{formik.errors.website}</Box>
                    ) : null}
                </Box>
                <Box pt={3} px={2} ml='auto'>
                    <Button type="submit">
                        Submit
                    </Button>
                </Box>
                {/* {error ? (
                    <Box pt={3} px={2}>
                        <ErrorMessage>{error[Object.keys(error)[0]]}</ErrorMessage>
                    </Box>
                ) : null} */}
            </Flex>
        </Box>
    );
}



export default EditProfile;