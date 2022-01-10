import React from 'react'

export function Emoji(props) {

    return (
        <img
            className='emoji'
            alt={`${props.title} реакт эмоджи, react emoji, реакт эмодзи`}
            src={props.emoji}
        />
    )
}