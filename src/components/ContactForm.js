import {useState} from "react";
import Form from "react-formal";
import {object, string} from "yup";

function ContactForm({handler, isLoading, isSent}) {
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

    function onSubmit(formValue) {
        handleFormSubmit(formValue);
    }


    const modelSchema = object({
        name: string()
            .min(2, 'Минимум 2 символа')
            .required('Укажите имя'),
        email: string()
            .min(7, 'Минимум 7 символов')
            .email('Почта должна содержать символ @ и домен')
            .required('Укажите почту')
    });

    return (
        <Form schema={modelSchema}>

                <Form.Field name="name" placeholder="Имя" onChange={(e) => handleFieldChange("visitor-name", e)}/>
                <Form.Message
                    for={["name"]}
                    className="validation-error"
                />

            <Form.Field name="email" placeholder="Почта" onChange={(e) => handleFieldChange("visitor-email", e)}/>
            <Form.Message for="email" className="validation-error"/>

            <Form.Submit type="submit" onClick={onSubmit}>{isLoading ? "Отправка..." : "Отправить"}</Form.Submit>
            <span>{isSent ? "Письмо успешно оправлено" : null}</span>
        </Form>
    )
}

export default ContactForm;