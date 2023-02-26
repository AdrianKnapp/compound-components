import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import CommonStep from "../CommonStep";

const StepperContext = createContext(null);

type StepperContextModel = {
  nextStep: () => void;
  prevStep: () => void;
  setActive: (index: number) => void;
  active: number;
};

type StepperHookProps = {
  children: JSX.Element[];
};

const StepperHook = ({ children }: StepperHookProps) => {
  const [active, setActive] = useState(0);

  const nextStep = useCallback(() => {
    if (active < children.length - 1) setActive(active + 1);
  }, [active, children]);

  const prevStep = useCallback(() => {
    if (active > 0) setActive(active - 1);
  }, [active]);

  const value: StepperContextModel = useMemo(
    () => ({
      nextStep,
      prevStep,
      setActive,
      active
    }),
    [active, nextStep, prevStep]
  );

  return (
    <StepperContext.Provider value={value}>
      {children[active]}
    </StepperContext.Provider>
  );
};

export const useStepperContext = (): StepperContextModel => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error(
      `Stepper compound components cannot be rendered outside the StepperHook component`
    );
  }

  return context;
};

const Step = ({ children }) => {
  const { nextStep, prevStep, active } = useStepperContext();

  return (
    <CommonStep nextStep={nextStep} prevStep={prevStep} active={active}>
      {children}
    </CommonStep>
  );
};

StepperHook.Step = Step;

export default StepperHook;
