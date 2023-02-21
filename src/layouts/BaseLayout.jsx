import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: token });
    }
  }, [dispatch]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BaseLayout;
