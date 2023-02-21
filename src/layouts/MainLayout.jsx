import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const MainLayout = ({ user }) => {
  if (!user.user) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        backgroundColor: "#EDE8E3",
        border: "1px solid black",
        boxSizing: "border-box",
        overflowY: "scroll",
      }}
    >
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(MainLayout);
