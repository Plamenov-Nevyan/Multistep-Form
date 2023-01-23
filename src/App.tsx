import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AdressForm } from "./AdressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"

type FormData = {
    firstName : string,
    lastName : string,
    age : string,
    street : string,
    city : string,
    state : string,
    ZIP : string,
    email : string,
    password : string,
}

let initialData: FormData = {
    firstName : "",
    lastName : "",
    age : "",
    street : "",
    city : "",
    state : "",
    ZIP : "",
    email : "",
    password : ""
}

function App() {
    const {
      steps,
      currentStepIndex,
      step,
      isFirstStep,
      isLastStep,
      nextStep,
      previousStep
    } = useMultistepForm([<UserForm {...data}/>, <AdressForm {...data} />, <AccountForm {...data}/>])

    const [data, setData] = useState(initialData)

    const onSubmit = (e : FormEvent) => {
            e.preventDefault()
            nextStep()
    }

 return <div id="container">
    <form onSubmit = {onSubmit}>
       <div id="steps_handler">
        {currentStepIndex + 1} / {steps.length}
       </div>

    {step}

    <div id="buttons_container">
        {!isFirstStep && <button type="button" onClick={previousStep}>
            Previous
        </button>}
        <button type="submit">
            {isLastStep
              ? 'Finish'
              : 'Next'
            }
        </button>
    </div>
    </form>
 </div>
}

export default App
