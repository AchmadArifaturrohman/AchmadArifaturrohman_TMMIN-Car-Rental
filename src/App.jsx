import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"; //components menggunakan awalan huruf besar, html awalan huruf kecil
import Sewa from "./pages/Sewa";
import Detail from "./pages/Detail"
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(3);

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<Sewa />} />
        <Route path="/cari/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
export default App;
