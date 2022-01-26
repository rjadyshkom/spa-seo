import ContactForm from '../helpers/ContactForm';
import { Seo } from '../helpers/Seo';
import React from 'react';
import { TranslationContext } from '../contexts/TranslationContext';

export function Contacts(props) {
    const translation = React.useContext(TranslationContext);

    return (
        <>
            <Seo
                title={translation.contacts.title}
                description={translation.contacts.description}
                keywords={translation.contacts.keywords}
                favicon={props.favicon}
                ogImage={props.ogImage}
                language={translation.language}
                siteName={translation.siteName}
            />
            <div className="content">
                <ContactForm />
            </div>
        </>
    )
}