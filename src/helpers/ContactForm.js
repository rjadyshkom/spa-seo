import React, { useState } from 'react';
import { object, string } from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import { showOrHideMessageSmoothly, emailRegex } from '../utils/constants';
import {TranslationContext} from '../contexts/TranslationContext';

const API_URL = process.env.REACT_APP_API_URL;
const FORM_ID = process.env.REACT_APP_WP_CF7_ID;

const dataFromForm = (json) => {
    try {
        const data = new FormData();

        for (let key in json) {
            data.append(key, json[key]);
        }
        return data
    } catch (error) {
        console.error(error);
        return null;
    }
}

const ContactForm = () => {
    const [state, setState] = useState('');
    const {buttonNames, labels, messages, placeholders, validationMessages } = React.useContext(TranslationContext).form;

    const validationSchema = object({
        formName: string()
            .min(2, validationMessages.name.min)
            .required(validationMessages.name.required), formEmail: string()
            .min(7, validationMessages.email.min)
            .matches(emailRegex, validationMessages.email.matches)
            .required(validationMessages.email.required), formMessage: string()
            .max(100, validationMessages.message.max)
            .required(validationMessages.message.required)
    });

    return (<>
        <Formik
            initialValues={{
                formName: '',
                formEmail: '',
                formMessage: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                const onFormSubmit = async () => {

                    try {
                        await axios({
                            url: `${API_URL}/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                            },
                            method: 'POST',
                            data: dataFromForm(values)
                        })
                        setState(messages.success);
                        showOrHideMessageSmoothly();
                        setSubmitting(false);
                        resetForm();
                        setTimeout(() => {
                            showOrHideMessageSmoothly();
                        }, 3000)
                    } catch (error) {
                        setState(messages.error);
                        showOrHideMessageSmoothly();
                        setSubmitting(false);
                        setTimeout(() => {
                            showOrHideMessageSmoothly();
                        }, 3000)
                    }
                };

                void onFormSubmit();
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
                  isSubmitting,
                  handleReset
              }) => (<form
                onSubmit={handleSubmit}
                className="form"
                noValidate
            >
                <fieldset className="form__data">
                    <div className="form__field">
                        <input
                            className={errors.formName && touched.formName ? "form__input_invalid" : "form__input"}
                            type="text"
                            name="formName"
                            id="formName"
                            placeholder={placeholders.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.formName}
                        />
                        <label
                            htmlFor="formName"
                            className="form__label"
                        > {labels.name} </label>
                        <div className="form__wrapper">
                            {errors.formName && touched.formName ? <span
                                className="form__error fade fade_type_top"
                            >{errors.formName}</span> : null}
                        </div>
                    </div>

                    <div className="form__field">
                        <input
                            className={errors.formEmail && touched.formEmail ? "form__input_invalid" : "form__input"}
                            type="email"
                            name="formEmail"
                            id="formEmail"
                            placeholder={placeholders.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.formEmail}
                        />
                        <label
                            htmlFor="formEmail"
                            className="form__label"
                        > {labels.email} </label>
                        <div className="form__wrapper">
                            {errors.formEmail && touched.formEmail ? <span
                                className="form__error fade fade_type_top"
                            >{errors.formEmail}</span> : null}
                        </div>
                    </div>

                    <div className="form__field">
                                    <textarea
                                        name="formMessage"
                                        id="formMessage"
                                        placeholder={placeholders.message}
                                        rows="1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.formMessage}
                                        className={errors.formMessage && touched.formMessage ? "form__input_invalid" : "form__input_textarea"}
                                    />
                        <label
                            htmlFor="formMessage"
                            className="form__label"
                        > {labels.message} </label>
                        <div className="form__wrapper">
                            {errors.formMessage && touched.formMessage ? <span
                                className="form__error fade fade_type_top"
                            >{errors.formMessage}</span> : null}
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
                        {buttonNames.reset}
                    </button>
                    <button
                        type="submit"
                        disabled={!(dirty && isValid)}
                        className="form__button form__button_type_submit"
                    >
                        {isSubmitting
                            ? <svg
                                className="spinner"
                                viewBox="0 0 50 50"
                            >
                                <circle
                                    className="path"
                                    cx="25"
                                    cy="25"
                                    r="10"
                                    fill="none"
                                    strokeWidth="3"
                                >&nbsp;</circle>
                            </svg>
                            : buttonNames.submit}
                    </button>
                </fieldset>

                <fieldset className="form__info">
                    {state
                        ? <div className="form__container">
                            <p className="form__message">
                                {state}
                            </p>
                        </div>
                        : null}
                </fieldset>
            </form>)}
        </Formik>
    </>);
};

export default ContactForm;