import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import { useState } from "react";
import "./app.css";

const App = () => {

  // eslint-disable-next-line 
  const [name, setName] = useState("Shiver");

  return (
    <>
      <Navbar name={name}/>
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
