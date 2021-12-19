import React, {cloneElement, useState} from "react"

const jsonToFormData = (json) => {
    console.log(json)
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

const FormWrapper = ({children, siteUrl, formId}) => {
    const [isSent, setSent] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(null)

    const apiUrl =
        `${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`

    const formSubmitHandler = (event, payload) => {
        event.preventDefault()

        setLoading(true)
        setError(null)

        fetch(apiUrl, {
            method: "POST",
            body: jsonToFormData(payload),
        })
            .then((resp) => resp.json())
            .then((resp) => {
                if (resp.status !== "mail_sent")  throw resp.message
                    setSent(true)
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const Form = cloneElement(children, {
        handler: formSubmitHandler,
        isLoading,
        isSent,
        hasError,
    })

    return <div>{(siteUrl && formId) ? Form : 'Проверить эндпоинт формы'}</div>
}

export default FormWrapper;