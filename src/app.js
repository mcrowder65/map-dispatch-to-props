import React from "react";
import WrongWay from "./wrong-way";
import Providers from "./providers";
import RightWay from "./right-way";

function App() {
  return (
    <Providers>
      <WrongWay />
      <RightWay />
    </Providers>
  );
}

export default App;
