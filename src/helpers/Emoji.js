import React from "react"

function Emoji(props) {
    return (
        <img
            className="emoji"
            alt={props.title + ' эмоджи emodji'}
            src={props.emoji}
        />
    )
}

export default Emoji;