import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import JobListing from "./pages/JobListing";
import JobPosting from "./pages/JobPosting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/joblist" element={<JobListing />} />
        <Route path="/jobpost" element={<JobPosting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
