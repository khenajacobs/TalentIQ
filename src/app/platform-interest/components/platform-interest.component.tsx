"use client"; 

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


const interestOptions = [
  'Working together with my team',
  'Time tracking',
  'Analytics and reporting',
  'Maintain communication with stakeholders'
];

const validationSchema = Yup.object({
  interests: Yup.array()
    .min(1, 'Please select at least one interest.')
    .required('Interests are required.'),
});

const PlatformInterestComponent: React.FC = () => {
  const router = useRouter(); 

  const initialValues = {
    interests: [] as string[],
  };

  const submitForm = (values: { interests: string[] }) => {
    //Same logic as before: Send to API endpoint and continue with user flow.
    window.alert('PoC user flow stops here. ' + values.interests)
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Select Your Interests</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ isSubmitting }) => (
          <Form className="needs-validation">
            <div className="mb-3">
              <label className="form-label">What features or activities are you interested in?</label>
              {interestOptions.map((option) => (
                <div key={option} className="form-check">
                  <Field
                    type="checkbox"
                    name="interests"
                    value={option}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
              <ErrorMessage
                name="interests"
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
                Submit platform interests
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PlatformInterestComponent;
