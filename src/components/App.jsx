import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Parking from './Parking'
import ParkingSlots from '../ParkingSlot'

const App = () => {
  const [parkingSlots, setParkingSlot] = useState([]);

  const addParkingSlot = (create) => {
    setParkingSlot((prevValue) => [...prevValue, create]);
  }

  const handleEntranceOne = () => {
    let distance = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], entrance = 2.5;
    const closest = distance.reduce(function (prev, curr) {
      return (Math.abs(curr - entrance) < Math.abs(prev - entrance) ? curr : prev);
    });

    console.log(closest);


    setParkingSlot(parkingSlots.map((obj, index) => {
      if (index === 1) {
        return { ...obj, status: 'occupied' };
      }
      return obj;
    })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addParkingSlot}
        handleEntranceOne={handleEntranceOne}
      />
      {/* {ParkingSlots.map((parkingSlot) => (
        <Parking
          id={parkingSlot.id}
          key={parkingSlot.id}
          size={parkingSlot.size}
        />
      ))} */}
      {parkingSlots.map((parkingSlot, index) => (
        <Parking
          id={index}
          key={index}
          size={parkingSlot.size}
          status={parkingSlot.status}
        />
      ))}

      <Footer />

    </div>
  )
}

export default App