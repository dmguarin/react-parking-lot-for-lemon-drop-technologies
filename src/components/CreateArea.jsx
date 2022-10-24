import React, { useState } from 'react'
import ParkingSlots from '../ParkingSlotsDb'

const CreateArea = (props) => {
    const [carSize, setCarSize] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setCarSize(value);
    }

    const [create, setCreate] = useState({
        size: "S",
        status: "vacant"
    });

    // const generateParking = () => {
    //     for (let i = 0; i < 12; i++) {
    //         props.onAdd(create);
    //     }
    // }

    return (
        <div className='flex justify-center mt-[40px] mb-[40px]'>
            <div className='text-white border rounded-[8px] pt-3 px-12 w-[180px] h-[160px] bg-[#0000FF]/80'>
                <h3 className='font-semibold'>Enter size of this Car:</h3>
                <div className='mt-[15px]'>
                    <div>
                        <input
                            onChange={handleChange}
                            id="small"
                            type="radio"
                            name="size"
                            value="S"
                        />
                        <label for="small"> Small</label>
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            id="medium"
                            type="radio"
                            name="size"
                            value="M"
                        />
                        <label for="medium"> Medium</label>
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            id="large"
                            type="radio"
                            name="size"
                            value="L"
                        />
                        <label for="large"> Large</label>
                    </div>
                    {/* <button onClick={generateParking}>Generate Parking Lot</button> */}
                    {/* <button onClick={() => props.handleEntranceOne()}>Enter</button>
            <button onClick={() => props.handleEntranceTwo()}>Enter</button>
            <button onClick={() => props.handleEntranceThree()}>Enter</button> */}
                </div>
            </div>
        </div >
    )
}

export default CreateArea