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
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Некорректный email')
        .required('Укажите email'),
    formMessage: string()
        .max(100, 'Ограничение в 100 символов. Краткость - сестра таланта.')
        .required('Напишите хоть что-нибудь')
});

const dataFromForm = (json) => {
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
                    const onFormSubmit = async () => {

                        try {
                            const result = await axios({
                                url: `${API_URL}/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                                },
                                method: 'POST',
                                data: dataFromForm(values)
                            })
                            setState(result.data.message);
                            setSubmitting(false);
                        } catch (error) {
                            setState('Отправка не удалась');
                        }
                    };

                    void onFormSubmit();
                }}
                validateOnChange
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
                      isSubmitting,
                      handleReset
                  }) => (
                    <form onSubmit={handleSubmit} className="form" noValidate>
                        <fieldset className="form__data">
                            <div className="form__field">
                                <input
                                    className={errors.formName && touched.formName ? "form__input_invalid" : "form__input"}
                                    type="text"
                                    name="formName"
                                    id="formName"
                                    placeholder="Чтобы знать, как к Вам обращаться"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.formName}
                                />
                                <label htmlFor="formName" className="form__label"> Имя: </label>
                                <div className="form__wrapper">
                                    {errors.formName && touched.formName ?
                                        <span
                                            className="form__error fade fade_direction_top">{errors.formName}</span> : null}
                                </div>
                            </div>

                            <div className="form__field">
                                <input
                                    className={errors.formEmail && touched.formEmail ? "form__input_invalid" : "form__input"}
                                    type="email"
                                    name="formEmail"
                                    id="formEmail"
                                    placeholder="Чтобы было, куда отвечать"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.formEmail}
                                />
                                <label htmlFor="formEmail" className="form__label"> Электропочта: </label>
                                <div className="form__wrapper">
                                    {errors.formEmail && touched.formEmail ?
                                        <span
                                            className="form__error fade fade_direction_top">{errors.formEmail}</span> : null}
                                </div>
                            </div>

                            <div className="form__field">
                                    <textarea
                                        name="formMessage"
                                        id="formMessage"
                                        placeholder="Чтобы понять, о чём пойдёт речь"
                                        rows="1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.formMessage}
                                        className={errors.formMessage && touched.formMessage ? "form__input_invalid" : "form__input_textarea"}
                                    />
                                <label htmlFor="formMessage" className="form__label"> Сообщение: </label>
                                <div className="form__wrapper">
                                    {errors.formMessage && touched.formMessage ?
                                        <span
                                            className="form__error fade fade_direction_top">{errors.formMessage}</span> : null}
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="form__handlers">
                            <button
                                type="button"
                                className="form__button form__button_type_reset"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Очистить
                            </button>
                            <button type="submit" disabled={!(dirty && isValid)} className="form__button form__button_type_submit">
                                {isSubmitting ? 'Отправка...' : 'Отправить'}
                            </button>
                        </fieldset>
                    </form>
                )}
            </Formik>

            {state ? <p>{state}</p> : null}
        </>
    );
};

export default Form;