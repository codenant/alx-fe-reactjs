import { Routes, Route } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  return (
    <>
      <div>Profile</div>
      <Routes>
        <Route path="/" element={<Profile />}>
          <Route path="setting" element={<ProfileSettings />} />
          <Route path="details" element={<ProfileDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default Profile;
