import ContactForm from '../helpers/ContactForm';
import { Seo } from '../helpers/Seo';
import React from 'react';
import { TranslationContext } from '../contexts/TranslationContext';
import {images} from '../data/images';

export function Contacts(props) {
    const translation = React.useContext(TranslationContext);
    const contactsImages = images.notFound;

    return (
        <>
            <Seo
                title={translation.contacts.title}
                description={translation.contacts.description}
                keywords={translation.contacts.keywords}
                favicon={props.theme === 'light' ? contactsImages.darkImage : contactsImages.image}
                ogImage={props.theme === 'light' ? contactsImages.ogImage : contactsImages.darkOgImage}
                language={props.language}
                siteName={translation.siteName}
            />
            <div className="content">
                <ContactForm />
            </div>
        </>
    )
}