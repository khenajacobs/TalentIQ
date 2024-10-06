
"use client"; 

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useRouter } from 'next/navigation'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { postUserInformation } from '@/app/services/user-information.service';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  consentToTermsAndConditions: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  consentToTermsAndConditions: boolean;
}

const UserInformationFormComponent: React.FC = () => {
  const router = useRouter(); 
  
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    consentToTermsAndConditions: false,
  };

  const submitForm = (values: FormValues) => {
    //In a real scenario, this would be an async call where we need to wait on the response of
    // the endpoint before continuing with the user registration journey
    //I'm will not spoof the async call. Could be demod with e.g. a Postman mock server (or other tech to try it locally)
    postUserInformation(values);

    router.push('/create-workspace');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Contact Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form className="needs-validation">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder="Enter your first name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Enter your last name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="form-check mb-3">
              <Field
                type="checkbox"
                id="consentToTermsAndConditions"
                name="consentToTermsAndConditions"
                className="form-check-input"
              />
              <label htmlFor="consentToTermsAndConditions" className="form-check-label">
                I agree to the terms and conditions
              </label>
              <ErrorMessage
                name="consentToTermsAndConditions"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mt-auto d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit user information
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInformationFormComponent;
