import React from "react";
import { useFormik, Formik } from "formik";
import { Form, Input, Title, Button, Label, Text } from './addUser.style';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.city) {
        errors.city = 'Required';
    } else if (values.city.length > 20) {
        errors.city = 'Must be 20 characters or less';
    }

    if (!values.url) {
        errors.url = 'Required';
    } else if (values.url.length > 20) {
        errors.url = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const AddUser = () => {
    const formik = useFormik({
        initialValues: { name: "", city: "", url: "", email: "" },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Formik
            initialValues={{ name: '', city: '', email: '', url: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>
            <Form onSubmit={formik.handleSubmit}>
                <Title>Add User</Title>
                <Label>
                    Name *
                    <Input
                        id="name"
                        border={formik.errors.name && "1px solid red"}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && <Text color="red">{formik.errors.name}</Text>}
                </Label>
                <Label>
                    Email *
                    <Input
                        id="email"
                        border={formik.errors.email && "1px solid red"}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <Text color="red">{formik.errors.email}</Text>}
                </Label>
                <Label>
                    City *
                    <Input
                        id="city"
                        border={formik.errors.city && "1px solid red"}
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.city && <Text color="red">{formik.errors.city}</Text>}
                </Label>
                <Label>
                    Profile URL *
                    <Input
                        id="url"
                        border={formik.errors.city && "1px solid red"}
                        type="text"
                        name="url"
                        placeholder="Profile URL"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.url && <Text color="red">{formik.errors.url}</Text>}
                </Label>
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>
    );
};

export default AddUser;