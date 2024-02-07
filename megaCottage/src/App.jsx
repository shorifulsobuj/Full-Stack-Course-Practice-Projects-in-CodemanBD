import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <MainLayout />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;