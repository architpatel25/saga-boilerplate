import React from "react";
import { useFormik, Formik } from "formik";
import { UserForm, Title, UserButton, FieldLabel, ErrorTag, FieldInput } from './users.style';
import { CancelButton } from './updateUser.style';
import { updateUser } from '../../store/actions/actions';
import { connect } from 'react-redux';

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

let UpdateUser = (props) => {
    const formik = useFormik({
        initialValues: { name: "", city: "", url: "", email: "" },
        validate,
        onSubmit: values => {
            console.log('>>', JSON.stringify(values, null, 2));
            let data = JSON.stringify(values, null, 2);
            props.updateUser(data)
        },
    });
    console.log('this.props', props)

    return (
        <Formik>
            <UserForm onSubmit={formik.handleSubmit}>
                <Title>Update User</Title>
                <FieldLabel>
                    Name *
                    <FieldInput
                        id="name"
                        border={formik.errors.name && "1px solid red"}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && <ErrorTag color="red">{formik.errors.name}</ErrorTag>}
                </FieldLabel>
                <FieldLabel>
                    Email *
                    <FieldInput
                        id="email"
                        border={formik.errors.email && "1px solid red"}
                        type="email"
                        name="email"
                        placeholder="Email"
                        disabled={true}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <ErrorTag color="red">{formik.errors.email}</ErrorTag>}
                </FieldLabel>
                <FieldLabel>
                    City *
                    <FieldInput
                        id="city"
                        border={formik.errors.city && "1px solid red"}
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.city && <ErrorTag color="red">{formik.errors.city}</ErrorTag>}
                </FieldLabel>
                <FieldLabel>
                    Profile URL *
                    <FieldInput
                        id="url"
                        border={formik.errors.city && "1px solid red"}
                        type="text"
                        name="url"
                        placeholder="Profile URL"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.url && <ErrorTag color="red">{formik.errors.url}</ErrorTag>}
                </FieldLabel>
                <div>
                    <CancelButton onClick={() => props.history.push('/')}>Cancel</CancelButton>
                    <UserButton type="submit">Update</UserButton>
                </div>
            </UserForm>
        </Formik>
    );
};

const mapStateToProps = (state) => {
    return ({
        users: state.UsersReducer.users,
    })
}
const mapDispatchToProps = dispatch => {
    return {
        updateUser: (data) => dispatch(updateUser(data))
    }
}

UpdateUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateUser)

export default UpdateUser;
