"use client"; 

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const validationSchema = Yup.object({
  workspaceName: Yup.string()
    .required('Workspace name is required')
    .matches(
      /^[a-zA-Z0-9@]+$/,
      "This field cannot contain white space and/or special character"
    )
});

const WorkspaceCreationComponent: React.FC = () => {
  const router = useRouter(); 

  const initialValues = {
    workspaceName: '',
  };

  const submitForm = (values: { workspaceName: string }) => {
    // Handle the workspace creation logic here, e.g., send to API
    
    // Show success toast message
    toast.success(`Workspace "${values.workspaceName}" created successfully!`, {
      autoClose: 1000,
    });

    router.push('user-roles');
  };

  return (
    <div className="container mt-4">
      <ToastContainer />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="workspaceName" className="form-label">
                Workspace Name
              </label>
              <Field
                type="text"
                id="workspaceName"
                name="workspaceName"
                className="form-control"
                placeholder="Enter your workspace name"
              />
              <ErrorMessage
                name="workspaceName"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mt-auto d-flex justify-content-end">
            <button
                type="button"
                className="btn btn-tertiary me-1"
                onClick={() => {
                  router.push(
                    '/register-user',
                  )
                }}
              >
                Back to user information
              </button>
              <button
                type="submit"
                className="btn btn-primary ms-1"
                disabled={isSubmitting}
              >
                Create workspace
              </button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default WorkspaceCreationComponent;
