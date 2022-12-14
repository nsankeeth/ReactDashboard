import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import Card from "./Card";
import UserProfile from "./UserProfile";
import UserList from "./UserList";

function HomePage() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // get current user's name
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

  // listen to user state, if user logout, navigate to login page
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <SideMenu activeTab={"home"} />
      <div className="p-2 dashboard-container">
        <Navbar />
        <div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Card title={"User Profile"}>
                <UserProfile user={user} />
              </Card>
            </div>
            <div className="col-md-6 mb-2">
              <Card title={"User List"}>
                <UserList />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
