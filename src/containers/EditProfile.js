import React from 'react';

//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';


//Style
import styled from 'styled-components';

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex,
    Link
} from 'rebass/styled-components'

import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
} from '@rebass/forms/styled-components'

const EditProfile = () => {
    const formik = useFormik({
        initialValues: {
            bio: '',
            location: '',
            siteweb: '',
        },
        validationSchema: Yup.object({
            bio: Yup.string()
                .max(160, 'Must be 160 characters or less'),
            location: Yup.string()
                .max(30, 'Must be 30 characters or less'),
            siteweb: Yup.string()
                .max(100, 'Must be 100 characters or less')
        }),
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <Box
            as='form'
            onSubmit={formik.handleSubmit}
        >
            <Flex mx={-2} mb={3} flexDirection="column">
                <Box px={2}>
                    <Label htmlFor='bio'>Bio</Label>
                    <Input
                        id='bio'
                        name='bio'
                        placeholder='Add biography'
                        {...formik.getFieldProps('bio')}
                    />
                    {formik.touched.bio && formik.errors.bio ? (
                        <Box color="red">{formik.errors.bio}</Box>
                    ) : null}
                </Box>
                <Box px={2}>
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
                <Box px={2}>
                    <Label htmlFor='siteweb'>Siteweb</Label>
                    <Input
                        id='siteweb'
                        name='siteweb'
                        placeholder='Add siteweb'
                        {...formik.getFieldProps('siteweb')}
                    />
                    {formik.touched.siteweb && formik.errors.siteweb ? (
                        <Box color="red">{formik.errors.siteweb}</Box>
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