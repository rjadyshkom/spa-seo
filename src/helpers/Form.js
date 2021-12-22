import * as React from 'react';
import {object, string} from 'yup';
import axios from 'axios';
import {Formik} from 'formik';

const API_URL = 'https://rjadysh.com/wp-json';
const FORM_ID = '4009';

const validationSchema = object({
    formName: string()
        .min(2, 'Минимум 2 символа')
        .required('Укажите имя'),
    formEmail: string()
        .min(2, 'Минимум 7 символов')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email должен содержать символ @, домен и доменную зону')
        .required('Укажите почту'),
    formMessage: string()
        .max(100, 'Ограничение в 100 символов. Сформулируешь покороче?')
        .required('Напишите хоть что-нибудь')
});

const convertToFormData = (json) => {
    try {
        const data = new FormData()

        for (let key in json) {
            data.append(key, json[key])
        }
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

const Form = () => {
    const [state, setState] = React.useState('');

    return (
        <>
            <Formik
                initialValues={{
                    formName: '',
                    formEmail: '',
                    formMessage: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    const submitData = async () => {

                        try {
                            const result = await axios({
                                url: `${API_URL}/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                                },
                                method: 'POST',
                                data: convertToFormData(values)
                            });
                            setState(result.data.message);
                            setSubmitting(false);
                        } catch (error) {
                            setState('Отправка не удалась');
                        }
                    };
                    submitData();
                }}
            >
                {({
                      dirty,
                      isValid,
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">
                                Имя *
                                <input
                                    type="text"
                                    name="formName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.formName}
                                />
                                {errors.formName && touched.formName ? <div>{errors.formName}</div> : null}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Email *
                                <input
                                    type="email"
                                    name="formEmail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.formEmail}
                                />
                                {errors.formEmail && touched.formEmail ? <div>{errors.formEmail}</div> : null}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Сообщение *
                                <textarea
                                    name="formMessage"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.formMessage}
                                />
                                {errors.formMessage && touched.formMessage ? <div>{errors.formMessage}</div> : null}
                            </label>
                        </div>
                        <button type="submit" disabled={!(dirty && isValid)}>
                            {isSubmitting ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                )}
            </Formik>

            {state ? <p>{state}</p> : null}
        </>
    );
};

export default Form;