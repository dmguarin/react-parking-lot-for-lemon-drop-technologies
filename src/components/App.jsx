import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Parking from './Parking'
import ParkingSlotsDb from '../ParkingSlotsDb'

const App = () => {
  let distance = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15];

  const [parkingSlots, setParkingSlot] = useState(ParkingSlotsDb);

  const addParkingSlot = (create) => {
    setParkingSlot((prevValue) => [...prevValue, create]);
  }

  const handleEntranceOne = () => {
    let entrance = 3;
    const closest = distance.reduce(function (prev, curr) {
      return (Math.abs(curr - entrance) < Math.abs(prev - entrance) ? curr : prev);
    });

    console.log(closest);

    setParkingSlot(parkingSlots.map((obj, index) => {
      if (index === closest) {
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