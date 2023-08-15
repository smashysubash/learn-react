import React, { useEffect } from "react";
import { authService } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    authService.logout();
    navigate("/login");
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
