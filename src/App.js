import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Songs from "./pages/Songs";
import Axios from "axios";
import { useState } from "react";
function App() {
  const [data, setData] = useState("");

  const storageData = (song) => {
    Axios.post(`http://localhost:5000/songs`, song)
      .then((response) => {
        setData(response);
        alert("data berhasil");
        console.log("data", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/songs" element={<Songs Storage={storageData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
