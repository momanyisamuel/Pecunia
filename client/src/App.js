import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Applicant from "./pages/DashBoard/Applicant";
import ProtectedRoute from "./helpers/ProtectedRoute";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Registration from './pages/Registration';
import SecondaryApplicantForm from "./pages/Registration/SecondaryApplicantForm";
import TertiaryApplicantForm from "./pages/Registration/TertiaryApplicantForm";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registration/secondary"
            element={
              <ProtectedRoute>
                <SecondaryApplicantForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registration/university"
            element={
              <ProtectedRoute>
                <TertiaryApplicantForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/applicant/:id"
            element={
              <ProtectedRoute>
                <Applicant />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
