import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const MainLayout = ({ user, errors }) => {
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
        textAlign: "center",
      }}
    >
      {errors[0]?.payload ? (
        <p className="text-xs text-red-600" style={{ paddingTop: "1rem" }}>
          {errors[0]?.payload}
        </p>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

const mapStateToProps = ({ user, errors }) => ({
  errors,
  user,
});

export default connect(mapStateToProps, null)(MainLayout);
