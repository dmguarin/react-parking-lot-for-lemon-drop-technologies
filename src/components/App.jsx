import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Parking from './Parking'
import ParkingSlotsDb from '../ParkingSlotsDb'

const App = () => {
  const [vacantParkingLot, setVacantParkingLot] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const [parkingSlots, setParkingSlot] = useState(ParkingSlotsDb);

  const addParkingSlot = (create) => {
    setParkingSlot((prevValue) => [...prevValue, create]);
  }

  const handleEntranceOne = () => {
    console.log(vacantParkingLot);
    let entrance = 2.5;
    let closest = vacantParkingLot.reduce(function (prev, curr) {
      return (Math.abs(curr - entrance) < Math.abs(prev - entrance) ? curr : prev);
    });

    console.log(closest);

    setParkingSlot(parkingSlots.map((obj, index) => {

      if (index === closest && obj.status === "vacant") {

        setVacantParkingLot((prevValue) => {
          return prevValue.filter((n) => {
            return index !== n;
          });
        });

        return { ...obj, status: 'occupied' };
      }
      return obj;
    })
    );
  }


  const handleEntranceTwo = () => {
    console.log(vacantParkingLot);
    let entrance = 5.5;
    let closest = vacantParkingLot.reduce(function (prev, curr) {
      return (Math.abs(curr - entrance) < Math.abs(prev - entrance) ? curr : prev);
    });

    console.log(closest);

    setParkingSlot(parkingSlots.map((obj, index) => {

      if (index === closest && obj.status === "vacant") {

        setVacantParkingLot((prevValue) => {
          return prevValue.filter((n) => {
            return index !== n;
          });
        });

        return { ...obj, status: 'occupied' };
      }
      return obj;
    })
    );
  }


  const handleEntranceThree = () => {
    console.log(vacantParkingLot);
    let entrance = 8.5;
    let closest = vacantParkingLot.reduce(function (prev, curr) {
      return (Math.abs(curr - entrance) < Math.abs(prev - entrance) ? curr : prev);
    });

    console.log(closest);

    setParkingSlot(parkingSlots.map((obj, index) => {

      if (index === closest && obj.status === "vacant") {

        setVacantParkingLot((prevValue) => {
          return prevValue.filter((n) => {
            return index !== n;
          });
        });

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
        handleEntranceTwo={handleEntranceTwo}
        handleEntranceThree={handleEntranceThree}
      />
      <div>
        <div className='flex flex-auto'>
          {parkingSlots.map((parkingSlot, index) => (
            <Parking
              id={index}
              key={index}
              size={parkingSlot.size}
              status={parkingSlot.status}
            />
          ))}
        </div>
        <div className='min-w-[2000px]'>
          <div className='inline-block bg-black w-[335px] h-[20px]'></div>
          <button className="inline-block font-bold py-0.5 px-4 rounded bg-yellow-500 text-white hover:bg-gray-300" onClick={handleEntranceOne}>Enter</button>
          <div className='inline-block bg-black w-[320px] h-[20px]'></div>
          <button className="inline-block font-bold py-0.5 px-4 rounded bg-yellow-500 text-white hover:bg-gray-300" onClick={handleEntranceTwo}>Enter</button>
          <div className='inline-block bg-black w-[320px] h-[20px]'></div>
          <button className="inline-block font-bold py-0.5 px-4 rounded bg-yellow-500 text-white hover:bg-gray-300" onClick={handleEntranceThree}>Enter</button>
          <div className='inline-block bg-black w-[403px] h-[20px]'></div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default App