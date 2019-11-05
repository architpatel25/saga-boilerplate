import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { withRouter, useHistory } from 'react-router-dom';
import { UserButton } from './userStyle';

const UserList = (props) => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]

    const [users, setUsers] = useState(usersData)

    let history = useHistory();
    console.log('>props', history)

    return (
        <>
            <UserButton onClick={() => history.push("/add-user")} >Add User</UserButton>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="button muted-button">Edit</button>
                                    <button className="button danger">Delete</button>
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
