import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AuthLayout = ({ user }) => {
  if (user.user) {
    return <Navigate to="/Home" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(AuthLayout);
