import React, { useState } from 'react';
import './Login.css';
import linkedin from './images/linkedin.svg'
import { auth } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) return alert("Please enter a full name!");

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePicture,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePicture,
          }));
        });
      }).catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })
      );
    }).catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={linkedin} alt="Linkedin"/>

      <form>
        <input 
          type="text" 
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="text"
          placeholder="Profile picture URL (optional)"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>
          Not a member?{" "}
          <span 
            className="login__register"
            onClick={register}
          >Register now</span>
        </p>
    </div>
  )
}

export default Login;
