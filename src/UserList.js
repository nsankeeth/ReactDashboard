import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { query, collection, getDocs } from "firebase/firestore";

import "./UserList.css";

function UserList() {
    const [users, setUsers] = useState([]);

    // Fetch all users from the firebase store 
    const fetchUsers = async () => {
        try {
            const q = query(collection(db, "users"));
            const docs = await getDocs(q);

            var userArray = [];
            docs.forEach((doc) => {
                var user = doc.data();
                userArray.push({
                    name: user.name,
                    email: user.email
                });
            });

            setUsers(userArray);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching users");
        }
    };

    useEffect(() => {
        fetchUsers();
    });

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
