import Profile from "./Profile";

const ProtectedRoute = () => {
  let auth = { token: true };

  return auth.token ? <Profile /> : "Please create a profile";
};

export default ProtectedRoute;
