import { FormWrapper } from "./FormsWrapper";

export function AdressForm(){
    return (
    <FormWrapper title="Adress details">
    <label>Street</label>
    <input autoFocus required type="text"/>
    <label>City</label>
    <input  required type="text"/>
    <label>State</label>
    <input  required type="text"/>
    <label>ZIP</label>
    <input  required type="text"/>
    </FormWrapper>
    )
}