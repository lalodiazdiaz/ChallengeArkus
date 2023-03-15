import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import Account from "./Components/CrudAccount/Account";
import UserList from "./Components/UserList/UserList";
import AccountList from "./Components/AccountList/AccountList";
import Users from "./Components/CrudUser/Users";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import TeamList from "./Components/TeamList/TeamList";
import LogTeams from "./Components/LogTeams/LogTeams";
import CrudLog from "./Components/CrudLog/CrudLog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/homeAdmin"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route
            path="/homeAdmin/"
            element={
              <ProtectedRoute>
                <AccountList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeAdmin/accounts"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeAdmin/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeAdmin/userslist"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeAdmin/teamlist"
            element={
              <ProtectedRoute>
                <TeamList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeAdmin/logteams"
            element={
              <ProtectedRoute>
                <LogTeams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeAdmin/addlogs"
            element={
              <ProtectedRoute>
                <CrudLog />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/homeUser"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route
            path="/homeUser/"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
