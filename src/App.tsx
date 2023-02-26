import React from "react";
import StepperFunction from "./components/StepperFunction";
import StepperHook from "./components/StepperHook";

const steps = ["Step 1", "Step 2", "Step 3"];

export default function App() {
  return (
    <div className="flex flex-col items-center text-center gap-8 p-4">
      <h1 className="font-bold text-md text-gray-700">Compound Components</h1>
      <section>
        <p className="mx-auto text-gray-700">With Render Props</p>
        <StepperFunction>
          {({ nextStep, prevStep, active }) => (
            <>
              {steps.map((step) => (
                <StepperFunction.Step
                  nextStep={nextStep}
                  prevStep={prevStep}
                  active={active}
                >
                  <p>{step}</p>
                </StepperFunction.Step>
              ))}
            </>
          )}
        </StepperFunction>
      </section>
      <section>
        <p className="mx-auto text-gray-700">With Context Hook</p>
        <StepperHook>
          {steps.map((step) => (
            <StepperHook.Step>
              <p>{step}</p>
            </StepperHook.Step>
          ))}
        </StepperHook>
      </section>
    </div>
  );
}
