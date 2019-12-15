import React from 'react'
import "./block.scss"
function Block(props) {
    return (
        <div className="block-container">{props.children}</div>
    )
}

export default Block
