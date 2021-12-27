import Form from '../helpers/Form';
import {Seo} from '../helpers/Seo';
import {baseUrl} from "../utils/constants";
import React from "react";

export function Contacts(props) {
    return (
        <>
            <Seo
                title={props.title}
                description={props.subtitle}
                keywords={props.keywords}
                favicon={props.favicon}
                ogImage={props.ogImage}
                canonical={`${baseUrl}${props.canonical}`}
                language={props.language}
                siteName={props.siteName}
            />
            <div className="content">
                <Form
                    labelName={props.labelName}
                    labelEmail={props.labelEmail}
                    labelMessage={props.labelMessage}
                    placeholderName={props.placeholderName}
                    placeholderEmail={props.placeholderEmail}
                    placeholderMessage={props.placeholderMessage}
                    buttonReset={props.buttonReset}
                    buttonSubmit={props.buttonSubmit}
                    validationNameMin={props.validationNameMin}
                    validationNameRequired={props.validationNameRequired}
                    validationEmailMin={props.validationEmailMin}
                    validationEmailMatches={props.validationEmailMatches}
                    validationEmailRequired={props.validationEmailRequired}
                    validationMessageMax={props.validationMessageMax}
                    validationMessageRequired={props.validationMessageRequired}
                    messageSuccess={props.messageSuccess}
                    messageError={props.messageError}
                />
            </div>
        </>
    )
}