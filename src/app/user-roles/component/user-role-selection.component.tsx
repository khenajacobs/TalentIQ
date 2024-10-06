"use client"; 

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useRouter } from 'next/navigation';
import { postUserRoleInformation } from '@/app/services/user-information.service';

const validationSchema = Yup.object({
  role: Yup.string().required('Please select your role.'),
});

const UserRoleSelectionComponent: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    userRole: '',
  };

  const submitForm = (values: { userRole: string }) => {

    postUserRoleInformation(values)

    router.push('/platform-interest');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Select Your Role</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form className="needs-validation">
            <div className="mb-3">
              <label htmlFor="userRole" className="form-label">
                Current Role
              </label>
              <Field as="select" id="userRole" name="userRole" className="form-select">
                <option value="" label="Select your role" />
                <option value="Recruiter" label="Recruiter" />
                <option value="Hiring Manager" label="Hiring Manager" />
                <option value="HR Business Partner" label="HR Business Partner" />
                <option value="CPO" label="CPO" />
              </Field>
              <ErrorMessage
                name="userRole"
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
                      '/create-workspace',
                    )
                  }}
                >
                  Back to create workspace
                </button>
                <button
                  type="submit"
                  className="btn btn-primary mt-auto d-flex justify-content-end"
                  disabled={isSubmitting}
                >
                  Submit Role
                </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserRoleSelectionComponent;
