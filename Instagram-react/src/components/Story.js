import React from 'react'

export default function Story(props) {
    return (
        <div className='story'>
            <img onClick={props.showStory} width="56px" height="56px" src={props.img}></img>
            <span>{props.username}</span>
        </div>
    )
}
