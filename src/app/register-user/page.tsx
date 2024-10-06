// pages/register-user.tsx

import React, { useState } from 'react';
import UserInformationFormComponent from './components/user-information-form.component';
import StepperComponent from '../framework/components/stepper/stepper.component';

const RegisterUserPage: React.FC = () => {
  //Ideally, I'd prefer to have the step values configured on one place. For now due to time restrictions, I will hard-code the steps on every page.
  const steps = [
    'Register your personal information',
    'Create a workspace',
    'Select your user role',
  ];


  return (
    <div className="container mt-5">
      <h1>Register User</h1>
      <StepperComponent steps={steps} activeStep={0} />
      <UserInformationFormComponent />
    </div>
  );
};

export default RegisterUserPage;
