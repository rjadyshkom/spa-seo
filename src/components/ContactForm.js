import {useState} from "react";

function ContactForm({handler, isLoading, isSent, hasError}) {
    const [formState, setFormState] = useState({})
    const handleFieldChange = (field, e) => {
        setFormState({
            ...formState,
            [field]: e.target.value,
        })
    }

    const handleFormSubmit = (e) => {
        handler(e, formState)
    }

    return (
        <form onSubmit={handleFormSubmit} noValidate>
            <fieldset>
                <input onChange={(e) => handleFieldChange("visitor-name", e)} type="text" placeholder="Ваше имя *"/>
                <input onChange={(e) => handleFieldChange("visitor-email", e)} type="email"
                       placeholder="Электропочта *"/>
            </fieldset>
            <fieldset>
                <span>{hasError || null}</span>
                <span>{isSent ? "Письмо успешно оправлено" : null}</span>
            </fieldset>


            <div>
                <input type="submit" value={isLoading ? "Отправка..." : "Отправить"}/>
            </div>

        </form>
    )
}

export default ContactForm;