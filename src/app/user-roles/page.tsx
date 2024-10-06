// pages/register-user.tsx

import React from 'react';
import UserRoleSelectionComponent from './component/user-role-selection.component';
import StepperComponent from '../framework/components/stepper/stepper.component';
import 'bootstrap/dist/css/bootstrap.min.css';


const steps = [
    'Register your personal information',
    'Create a workspace',
    'Select your user role',
  ];

const UserRolesPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>User role definition</h1>
      <StepperComponent steps={steps} activeStep={2} />

      <UserRoleSelectionComponent />
    </div>
  );
};

export default UserRolesPage;
