import { FormEvent, useState } from "react";
import { AccountForm } from "./components/AccountForm";
import { AdressForm } from "./components/AdressForm";
import { useMultistepForm } from "./hooks/useMultistepForm";
import { UserForm } from "./components/UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  ZIP: string;
  email: string;
  password: string;
};

let initialData: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  ZIP: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(initialData);

  function updateFormState(fields: Partial<FormData>) {
    setData((prevData) => {
      return {
        ...prevData,
        ...fields,
      };
    });
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    nextStep,
    previousStep,
  } = useMultistepForm([
    <UserForm {...data} updateFormState={updateFormState} />,
    <AdressForm {...data} updateFormState={updateFormState} />,
    <AccountForm {...data} updateFormState={updateFormState} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    return !isLastStep ? nextStep() : alert('Thank you for filling out this form, your profile was created successfully!')
  };

  return (
    <div id="container">
      <form onSubmit={onSubmit}>
      <div className="progress-bar">
        <div style={{width : isFirstStep ? '25%' : isLastStep ?'75%' : '50%'}}></div>
      </div>
        <div id="steps_handler">
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}

        <div id="buttons_container">
          {!isFirstStep && (
            <button type="button" onClick={previousStep}>
              Previous
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
