import { FormWrapper } from "./FormsWrapper"

type UserFormProps = {
    firstName : string,
    lastName : string,
    age : string
}
 
 export function UserForm({firstName, lastName, age}: UserFormProps){
    return( 
    <FormWrapper title="User Details">
     <label>First name</label>
     <input autoFocus required type="text" />
     <label>Last name</label>
     <input required type="text"/>
     <label>Age</label>
     <input required min={1} type="number"/>
     </FormWrapper>
    )
 }