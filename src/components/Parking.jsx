import React from 'react'

const Parking = (props) => {
    return (
        <div>
            <h2>{props.id}</h2>
            <h2>{props.size}</h2>
            <h2>{props.status}</h2>
        </div>
    )
}

export default Parking