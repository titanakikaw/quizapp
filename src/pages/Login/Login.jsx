import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CustomForm from "../../components/Form/Form";

const LoginFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    className:
      "relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
    placeholder: "Email address",
    validate: (value) => {
      if (!value) return "Please do not leave empty";
      return "";
    },
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    className:
      "relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
    placeholder: "Password",
    validate: (value) => {
      if (!value) return "Please do not leave empty";
      return "";
    },
  },
];

const LoginInitValues = LoginFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }),
  {}
);

const Login = ({ login }) => {
  return (
    <CustomForm
      fields={LoginFields}
      initialValues={LoginInitValues}
      btnText="Sign in"
      onSubmit={login}
    >
      <p className="mt-2 text-center text-sm text-gray-600">
        <Link
          to="register"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Don't have an account yet? Register now!
        </Link>
      </p>
    </CustomForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (values) =>
    dispatch({
      type: "LOGIN_REQUEST",
      payload: values,
    }),
});

export default connect(null, mapDispatchToProps)(Login);
