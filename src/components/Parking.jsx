import React from 'react'

const Parking = (props) => {
    return (
        <div>
            <div className='bg-[#D9D9D9] mr-10 w-[90px] h-[150px] border py-0.5 text-center border-4 border-x-yellow-500 border-b-black'>
                <h2>{props.size}</h2>
                <h2>{props.status}</h2>
                <h2>Time In: {props.timeString}</h2>
                <button className='font-bold py-0.5 px-4 rounded bg-red-500 text-white hover:bg-yellow-300' onClick={() => props.onChecked(props.id)}>EXIT</button>
            </div>
        </div>
    )
}

export default Parking