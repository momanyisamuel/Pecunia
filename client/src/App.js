import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
