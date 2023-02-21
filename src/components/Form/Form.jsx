import React from "react";
import { Formik, Form, Field } from "formik";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const CustomForm = ({ children, fields, btnText, ...props }) => {
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              QUIZ APP ( REACT JS )
            </h2>
          </div>
          <Formik {...props}>
            {({ isValid, dirty, isSubmitting, errors }) => (
              <Form className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                {children}
                {fields.map((x) => {
                  return <Field key={x.name} {...x} />;
                })}
                <div>
                  <button
                    type="submit"
                    disabled={!(dirty && isValid) || isSubmitting}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    {btnText}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
