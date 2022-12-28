import React, { useState } from "react";
import { authServise, auth } from "fibase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      let data;
      if (newAccount) {
        data = await authServise.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(data);
        setNewAccount(false);
      } else {
        data = await authServise.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(data);
      }
    } catch (error) {
      console.log(123123, error.code, error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async () => {
    const provider = new authServise.GoogleAuthProvider();
    const data = await authServise.signInWithPopup(auth, provider);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type={"email"}
          name="email"
          onChange={onChange}
          placeholder="Email"
          value={email}
        />
        <input
          type={"password"}
          name="password"
          onChange={onChange}
          placeholder="Password"
          value={password}
        />
        <input
          type={"submit"}
          value={newAccount ? "Create New Account " : "Log In"}
        />
      </form>
      <div>
        <button onClick={onSocialClick}>google</button>
      </div>
      <span onClick={toggleAccount}>
        {newAccount ? "Log in" : "Create Account"}
      </span>
    </div>
  );
}

export default Auth;
