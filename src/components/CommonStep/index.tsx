import React from "react";

type StepProps = {
  nextStep: () => void;
  prevStep: () => void;
  active?: number;
  children: JSX.Element;
};

const CommonStep = ({ nextStep, prevStep, active, children }: StepProps) => {
  return (
    <div>
      <div className="m-2">{children}</div>
      <div className="flex gap-2">
        <button className="py-2 px-4 bg-gray-200 rounded-md" onClick={prevStep}>
          Back
        </button>
        <button className="py-2 px-4 bg-gray-200 rounded-md" onClick={nextStep}>
          Skip
        </button>
      </div>
      <p className="m-1 text-sm text-gray-700">Active step: {active}</p>
    </div>
  );
};

export default CommonStep;
