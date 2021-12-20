import {useState} from 'react';
import Form, {ValidateStrategies} from 'react-formal';
import {object, string} from 'yup';

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

    function onFormSubmit(formData) {
        handleFormSubmit(formData);
    }

    const validationSchema = object({
        name: string()
            .min(2, 'Минимум 2 символа')
            .required('Укажите имя'),
        email: string()
            .min(2, 'Минимум 7 символов')
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email должен содержать символ @, домен и доменную зону')
            .required('Укажите почту'),
        message: string()
            .max(100, 'Ограничение в 100 символов. Сформулируешь покороче?')
            .required('Напишите хоть что-нибудь')
    });

    const {Change, Blur, BlurThenChangeAndBlur} = ValidateStrategies;

    return (
        <Form schema={validationSchema}>

            <Form.Field name="name"
                        placeholder="Имя"
                        onChange={(e) => handleFieldChange("visitor-name", e)}
                        validateOn={Blur}
            />
            <Form.Message
                for="name"
                className="validation-error"
            />

            <Form.Field name="email"
                        placeholder="Почта"
                        onChange={(e) => handleFieldChange("visitor-email", e)}
                        validateOn={BlurThenChangeAndBlur}/>

            <Form.Message for="email" className="validation-error"/>

            <Form.Field as={"textarea"}
                        name="message"
                        placeholder="Сообщение"
                        onChange={(e) => handleFieldChange("visitor-message", e)}
                        validateOn={Change}
            />
            <Form.Message for="message" className="validation-error"/>

            <Form.Submit type="submit" onClick={onFormSubmit}>Отправить</Form.Submit>
            <span>{isLoading ? "Отправляется..." : null}</span>
            <span>{isSent ? "Письмо успешно оправлено" : null}</span>
        </Form>
    )
}

export default ContactForm;