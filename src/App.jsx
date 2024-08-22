import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatpage" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
