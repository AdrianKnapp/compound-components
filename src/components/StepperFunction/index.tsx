import React from "react";
import { useState } from "react";
import CommonStep from "../CommonStep";

type ChildrenProps = {
  nextStep: () => void;
  prevStep: () => void;
  setActive: (index: number) => void;
  active: number;
};

type StepperFunctionProps = {
  children: (props: ChildrenProps) => JSX.Element;
  initial?: number;
};

const StepperFunction = ({ children, initial = 0 }: StepperFunctionProps) => {
  const [active, setActive] = useState(initial);

  const nextStep = () => {
    if (active < children({} as any).props.children.length - 1)
      setActive(active + 1);
  };

  const prevStep = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <div data-cid="stepper">
      {
        children({
          nextStep,
          prevStep,
          setActive,
          active
        } as ChildrenProps).props.children[active]
      }
    </div>
  );
};

StepperFunction.Step = CommonStep;

export default StepperFunction;
