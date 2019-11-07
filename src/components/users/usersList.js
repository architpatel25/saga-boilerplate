import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter, useHistory } from 'react-router-dom';
import { UserButton } from './users.style';

const UserList = (props) => {
    let history = useHistory();

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let deleteUserModal = <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete User</ModalHeader>
        <ModalBody>
            Are you sure ?
    </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={toggle}>Delete</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
    return (
        <>
            <UserButton color="primary" onClick={() => history.push("/add-user")} >Add User</UserButton>
            {deleteUserModal}
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Profile</th>
                        <th>Repositery</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.login}</td>
                                <td>{user.url}</td>
                                <td><a>{user.repos_url}</a></td>
                                <td>
                                    <Button className="button muted-button">Edit</Button>
                                    <Button color="danger" onClick={toggle}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </>
    );
}

export default withRouter(UserList);
