import React from "react";
import { auth, authServise } from "fibase";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const signout = () => {
    authServise.signOut(auth);
    navigate("/");
  };
  return (
    <div>
      Profile
      <button onClick={signout}>Log out</button>
    </div>
  );
}

export default Profile;
