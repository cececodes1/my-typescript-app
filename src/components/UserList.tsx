import React from 'react';

interface User {
    name: string;
    age: number;
}

const UserList: React.FC = () => {
    const users: User[] = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
    ];

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
