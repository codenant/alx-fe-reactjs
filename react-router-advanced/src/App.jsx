import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileSettings from "./components/ProfileSettings";
import ProfileDetails from "./components/ProfileDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Profile />}>
            <Route path=":userId" element={<Profile />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="details" element={<ProfileDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
