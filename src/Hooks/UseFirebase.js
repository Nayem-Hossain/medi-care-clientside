import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

import InitializeFirebase from "../Components/FirebaseAuthentication/InitializeFirebase";
import { useHistory } from "react-router";

InitializeFirebase();

const UseFirebase = () => {
  /* const location = useLocation();
    const redirect_url = location.state?.from || "/home"; */
  const history = useHistory();
  //for gmail login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  //for google logim
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //function for gmail login
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (!user.emailVerified) {
          setError("email is not verified");
          return;
        }
        history.push("/home");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //fnction for google signin
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
    /* signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    }); */
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        // logout successful.
      })
      .finally(() => setLoading(false));
  };

  //observer wheather user changed state or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleLogin,
    handleGoogleSignIn,
    logOut,
    loading,
    error,
  };
};

export default UseFirebase;
