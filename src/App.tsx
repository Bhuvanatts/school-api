import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AddClass } from "./pages/AddClass";
import { AddQns } from "./pages/AddQns";
import { Activity } from "./pages/Activity";
import { Navbar } from "./components/Navbar";
// import { ClassProvider } from "./context/ClassContext";

function App() {
  return (
    // <ClassProvider>
    <div>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<AddClass />} />
          <Route path="/qns" element={<AddQns />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </Container>
    </div>
    // </ClassProvider>
  );
}

export default App;
