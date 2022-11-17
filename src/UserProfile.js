import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import "./UserProfile.css";

function UserProfile({ user }) {
    const [name, setName] = useState("");

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (user) {
            fetchUserName();
        }
    }, [user]);

    return (
        <div className="p-3">
            <div className="text-center">
                <img src="./img_avatar.png" alt="Avatar" className="avatar"></img>
            </div>
            <h1>{name}</h1>
            <p>{user?.email}</p>
        </div>
    );
};

export default UserProfile;
