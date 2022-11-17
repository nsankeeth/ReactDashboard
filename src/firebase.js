import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDky0P2V5uvtq8B1dgIM_gEHnyf3uCsrW4",
  authDomain: "mobilewebapp-df14a.firebaseapp.com",
  projectId: "mobilewebapp-df14a",
  storageBucket: "mobilewebapp-df14a.appspot.com",
  messagingSenderId: "658090557895",
  appId: "1:658090557895:web:b2a9d1f94dcc7ad92b59e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to authenticate user with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Function to register user with email and password
// User details are recorded in firebase auth(to authenticate) and firestore(to capture user information)
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Function to logout active user
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
