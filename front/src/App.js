import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import Account from "./Components/CrudAccount/Account";
import UserList from "./Components/UserList/UserList";
import AccountList from "./Components/AccountList/AccountList";
import Users from "./Components/CrudUser/Users";
import Cookies from "js-cookie";
import { ROL } from "./constants";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {

  const rol = Cookies.get("rol");

  console.log(rol);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {rol === ROL.user ? (
          <Route path="/home" element={ <ProtectedRoute><Home rol={rol} /></ProtectedRoute>}>
            <Route path="/home" element={ <ProtectedRoute><Profile /></ProtectedRoute>} />
          </Route>
        ) : (
          <Route path="/home" element={(<ProtectedRoute> <Home rol={rol} /></ProtectedRoute>) }>
            <Route path="/home" element={<ProtectedRoute><AccountList /></ProtectedRoute> } />
            <Route path="/home/accounts" element={ <ProtectedRoute> <Account /></ProtectedRoute>} />
            <Route path="/home/users" element={ <ProtectedRoute> <Users /></ProtectedRoute>} />
            <Route path="/home/userslist" element={ <ProtectedRoute><UserList /></ProtectedRoute>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
