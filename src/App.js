import { Outlet } from "react-router-dom";
import Body from "./components/Body/Body";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
