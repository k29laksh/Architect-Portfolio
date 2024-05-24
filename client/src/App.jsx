import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;
