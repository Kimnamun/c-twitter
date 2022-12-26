import React, { useState } from "react";
import Router from "./Router";

function App() {
  const [isLogin, setIslogin] = useState(false);

  return (
    <>
      <Router isLogin={isLogin} />
    </>
  );
}

export default App;
