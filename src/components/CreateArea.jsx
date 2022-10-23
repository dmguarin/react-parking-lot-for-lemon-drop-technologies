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
        <div>
            <h3>Enter size of the Car:</h3>
            <div>
                <input
                    onChange={handleChange}
                    id="small"
                    type="radio"
                    name="size"
                    value="S"
                />
                <label for="small">Small</label>
            </div>
            <div>
                <input
                    onChange={handleChange}
                    id="medium"
                    type="radio"
                    name="size"
                    value="M"
                />
                <label for="medium">Medium</label>
            </div>
            <div>
                <input
                    onChange={handleChange}
                    id="large"
                    type="radio"
                    name="size"
                    value="L"
                />
                <label for="large">Large</label>
            </div>
            {/* <button onClick={generateParking}>Generate Parking Lot</button> */}
            <button onClick={() => props.handleEntranceOne()}>Enter</button>
            <button onClick={() => props.handleEntranceTwo()}>Enter</button>
            <button onClick={() => props.handleEntranceThree()}>Enter</button>
        </div>
    )
}

export default CreateArea