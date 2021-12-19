import FormWrapper from "../helpers/FormWrapper";
import ContactForm from "./ContactForm";

export function Contacts() {
    return (
        <div className="content">
            <FormWrapper siteUrl="https://rjadysh.com/" formId="4009">
                <ContactForm/>
            </FormWrapper>
        </div>
    )
}