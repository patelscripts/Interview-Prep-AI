import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import UserProvider from "./context/UserContext";
function App() {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep/>}></Route>
        </Routes>
      </Router>
      <Toaster
      toastOptions={{
          className:"",
          style:{
            fontSize : "13px",
          }
        }}>
      </Toaster>
    </div>
    </UserProvider>
  );
}
export default App;
