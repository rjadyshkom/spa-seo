import React from 'react'

function Emoji(props) {

    return (
        <img
            className='emoji'
            alt={`${props.title} реакт эмоджи, react emodji, реакт эмодзи`}
            src={props.emoji}
        />
    )
}

export default Emoji;