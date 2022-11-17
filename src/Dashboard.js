import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import Card from "./Card";
import UserProfile from "./UserProfile";
import UserList from "./UserList";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

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
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <SideMenu />
      <div className="p-2 dashboard-container">
        <Navbar />
        <Card
          title={"User Profile"}>
          <UserProfile
            user={user} />
        </Card>
        <Card
          title={"User List"}>
          <UserList />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
