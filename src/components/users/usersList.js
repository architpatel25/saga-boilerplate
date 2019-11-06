import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { withRouter, useHistory } from 'react-router-dom';
import { UserButton } from './userStyle';

const UserList = (props) => {
    const usersData = [{
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "url": "https://api.github.com/users/mojombo",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "type": "User",
    }, {
        "login": "defunkt",
        "id": 2,
        "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
        "url": "https://api.github.com/users/defunkt",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "type": "User",
    }]

    const [users, setUsers] = useState(usersData)

    let history = useHistory();
    console.log('>props', history)

    return (
        <>
            <UserButton color="primary" onClick={() => history.push("/add-user")} >Add User</UserButton>
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
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.login}</td>
                                <td>{user.url}</td>
                                <td><a>{user.repos_url}</a></td>
                                <td>
                                    <Button className="button muted-button">Edit</Button>
                                    <Button color="danger">Delete</Button>
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
