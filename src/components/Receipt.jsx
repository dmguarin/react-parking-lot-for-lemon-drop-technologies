import React from 'react'

const Receipt = (props) => {
    return (
        <div className='flex justify-center my-[40px]'>
            <div className='flex flex-col border text-left rounded-[8px] border-dashed border-y-4 border-y-[#0000FF]/60 py-12 px-8 w-[300px] h-[300px] bg-[#EBB1BB]/20'>
                <h2 className='text-center text-3xl font-bold'>Receipt</h2>
                <h2 className='mt-11 font-semibold'>Total Time: {props.totalTime} </h2>
                <h2 className='font-semibold'>Total Payment: {props.totalPayment}</h2>
            </div>
        </div>
    )
}

export default Receipt