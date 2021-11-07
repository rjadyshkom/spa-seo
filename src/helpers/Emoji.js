import React from 'react'

export function Emoji(props) {

    return (
        <img
            className='emoji'
            alt={`${props.title} реакт эмоджи, react emodji, реакт эмодзи`}
            src={props.emoji}
        />
    )
}