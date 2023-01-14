import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./helpers/ProtectedRoute";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
