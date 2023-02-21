import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const MainLayout = ({ user }) => {
  if (!user.user) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        backgroundColor: "#EDE8E3",
        boxSizing: "border-box",
        overflowY: "scroll",
      }}
    >
      <Outlet />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(MainLayout);
