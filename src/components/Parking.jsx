import React from 'react'

const Parking = (props) => {
    return (
        <div>
            <div className='bg-[#D9D9D9] mr-10 w-[90px] h-[130px] border py-2 text-center border-4 border-x-yellow-500 border-b-black'>
                <h2>{props.size}</h2>
                <h2>{props.status}</h2>
                <h2>Time In: {props.timeString}</h2>
            </div>
        </div>
    )
}

export default Parking