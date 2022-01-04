import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";

initializeFirebaseAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [success, setSuccess] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [loading,setLoading]=useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  
  // const appVerifier =window.recaptchaVerifier ;

  // To check if user is login
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (user.displayName) setUserName(user.displayName);
      } else {
        setUser({});
        setCheckUser(true);
        setUserName("");
      }
    });
  }, [auth]);


  // Login with google function
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        
        const user = result.user;
        setUser(user);
        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userName: user.displayName,
            userEmail: user.email,
            userImage: user.photoURL,
            role: "user",
          }),
        }).then();
      })
      .catch((error) => {
        // Handle Errors here.
      });
  };
  //login with facebook function
  const loginWithFacebook=()=>{
    signInWithPopup(auth, facebookProvider)
            .then((result) => {
              // The signed-in user info.
              const user = result.user;
              setUser(user);
              fetch("http://localhost:5000/users", {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  userName: user.displayName,
                  userEmail: user.email,
                  userImage: user.photoURL,
                  role: "user",
                }),
              }).then();
            })
            .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;

              if (errorCode === "auth/weak-password")
                setMessage("Password should be at least 6 characters");
              else if (errorCode === "auth/user-not-found")
                setMessage("User not found for this email. Please sign up");
              else if (errorCode === "auth/wrong-password")
                setMessage("Wrong Password");
              else setMessage("Something went wrong, Please try again later");
            });
  };
  // //login with phone number
  // const loginWithMobile=()=>{
    
  //   const phoneNumber1 = window.prompt('Enter Your Mobile Number');
  //   const phoneNumber= phoneNumber1;
  //   console.log(phoneNumber1);
  
  //   signInWithPhoneNumber(auth, phoneNumber)
  //   .then((confirmationResult) => {
  //     // SMS sent. Prompt user to type the code from the message, then sign the
  //     // user in with confirmationResult.confirm(code).
  //     let code=prompt('Enter the OTP');
  //     if(code==null) return;
  //     window.confirmationResult = confirmationResult;
  //     confirmationResult.confirm(code).then((result) => {
  //       // User signed in successfully.
  //       const user = result.user;
  //       // ...
  //     }).catch((error) => {
  //       // User couldn't sign in (bad verification code?)
  //       // ...
  //     });
  //     // ...
  //   }).catch((error) => {
  //     // Error; SMS not sent
  //     // ...
  //   });
  
  // }

  // Login with email pass function
  const loginWithEmailPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
           
        console.log(user);
        setUser(user);    
      
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/weak-password")
          setMessage("Password should be at least 6 characters");
        else if (errorCode === "auth/user-not-found")
          setMessage("User not found for this email. Please sign up");
        else if (errorCode === "auth/wrong-password")
          setMessage("Wrong Password");
        else setMessage("Something went wrong, Please try again later");
      });
  };

  // Sign up with email pass function
  const signUpWithEmailPass = (name, email, password, url) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        emailVerify();
        setUser(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {


            // send user info to database 
            fetch("http://localhost:5000/users", {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                userName: name,
                userEmail: email,
                userImage: url,
                role: "user",
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                setUserName(name);
                setUser(auth.currentUser);
              });
          })
          .catch((error) => {
            // An error occurred
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/weak-password")
          setMessage2("Password should be at least 6 characters");
        else if (errorCode === "auth/email-already-in-use")
          setMessage2("This email is already registered. Please Log In");
        else if (errorCode === "auth/network-request-failed")
          setMessage2("Network error! Please try again later");
        else if (errorCode === "auth/invalid-email")
          setMessage2("Invalid Email");
        else setMessage2("Something went wrong. Please try again later");
      });
  };

    // verify email 
    const emailVerify = () => {
      sendEmailVerification(auth.currentUser)
          .then(() => {
              // Email verification sent!
          });

  }

  // Logout function
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    loginWithGoogle,
    loginWithFacebook,
    loginWithEmailPass,
    signUpWithEmailPass,
    logout,
    message,
    setMessage,
    message2,
    setMessage2,
    success,
    setSuccess,
    checkUser,
    userName,
  };
};
export default useFirebase;
