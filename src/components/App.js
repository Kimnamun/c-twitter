import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { authServise, auth } from "fibase";

function App() {
  const [isLogin, setIslogin] = useState(false);
  const [inits, setinits] = useState(false);

  useEffect(() => {
    authServise.onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIslogin(true);
      } else {
        setIslogin(false);
      }
      setinits(true);
    });
  });

  return <>{inits ? <Router isLogin={isLogin} /> : "init..."}</>;
}

export default App;
