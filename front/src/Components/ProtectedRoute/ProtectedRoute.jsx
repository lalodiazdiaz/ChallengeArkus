import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("rol");
  if (!user) {
    return <Navigate replace to="/" />;
  }

  return children;
}

export default ProtectedRoute;
