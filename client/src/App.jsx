import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default App;
