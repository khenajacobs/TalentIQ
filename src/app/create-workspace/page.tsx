// pages/create-workspace.tsx

import React from 'react';
import WorkspaceCreationComponent from './components/create-workspace-form.component';
import StepperComponent from '../framework/components/stepper/stepper.component';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateWorkspacePage: React.FC = () => {
   //Ideally, I'd prefer to have the step values configured on one place. 
   //For now due to time restrictions, I will hard-code the steps on every page.
   const steps = [
    'Register your personal information',
    'Create a workspace',
    'Select your user role',
  ];
  
  return (
    <div className="container mt-5">
      <h1>Create Workspace</h1>
      <p>Enter a name for your workspace, which will be used to organize and manage your projects or teams.</p>
      <div className="mt-5">
        <StepperComponent steps={steps} activeStep={1} />
      </div>
      <WorkspaceCreationComponent/>
    </div>
  );
};

export default CreateWorkspacePage;
