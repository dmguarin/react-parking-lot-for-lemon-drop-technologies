import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Parking from './Parking'
import ParkingSlotsDb from '../ParkingSlotsDb'
import Receipt from './Receipt'

const App = () => {

  const [timeDisplay, setTimeDisplay] = useState('');
  const [clientTotalPayment, setClientTotalPayment] = useState('');

  const [vacantParkingLot, setVacantParkingLot] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const [parkingSlots, setParkingSlot] = useState(ParkingSlotsDb);

  const addParkingSlot = (create) => {
    setParkingSlot((prevValue) => [...prevValue, create]);
  }

  const handleEntranceOne = () => {
    const timeString = new Date().toLocaleTimeString();
    const time = new Date().getTime();
    console.log(timeString)
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

        return { ...obj, status: 'occupied', timein: time, timeString: timeString };
      }
      return obj;
    })
    );
  }


  const handleEntranceTwo = () => {
    const timeString = new Date().toLocaleTimeString();
    const time = new Date().getTime();
    console.log(timeString)
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

        return { ...obj, status: 'occupied', timein: time, timeString: timeString };
      }
      return obj;
    })
    );
  }


  const handleEntranceThree = () => {
    const timeString = new Date().toLocaleTimeString();
    const time = new Date().getTime();
    console.log(timeString)
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

        return { ...obj, status: 'occupied', timein: time, timeString: timeString };
      }
      return obj;
    })
    );
  }

  const exitCar = (id) => {
    const timeOut = new Date().getTime();

    setParkingSlot(parkingSlots.map((obj, index) => {
      if (index === id) {
        let timeDiffInHr = (timeOut - obj.timein) / 3600000
        console.log(timeDiffInHr);
        setTimeDisplay(msToHMS(timeOut - obj.timein));
        setClientTotalPayment(calculateTotalPayment(timeDiffInHr));
        console.log(clientTotalPayment);
        setVacantParkingLot((prevValue) => [...prevValue, id]);
        console.log(vacantParkingLot);
        return { ...obj, status: 'vacant', timein: "", timeString: "" };
      }
      return obj;
    })
    );

  }

  const calculateTotalPayment = (timeDiffInHr) => {
    let totalPayment;
    let addtlTime;
    timeDiffInHr = Math.round(timeDiffInHr)
    if (timeDiffInHr >= 3) {
      totalPayment = 40;
      addtlTime = timeDiffInHr - 3;
      if (addtlTime >= 1) {
        totalPayment = totalPayment + (addtlTime * 20);
        return totalPayment
      }
      return totalPayment
    } else if (timeDiffInHr >= 24) {
      totalPayment = 5000;
      addtlTime = timeDiffInHr - 24;
      if (addtlTime >= 1) {
        totalPayment = totalPayment + (addtlTime * 20);
        return totalPayment
      }
      return totalPayment
    } else if (timeDiffInHr < 3) {
      totalPayment = 40;
      return totalPayment;
    }
  }

  function msToHMS(ms) {
    // 1- Convert to seconds:
    let seconds = Math.floor(ms / 1000);
    // 2- Extract hours:
    const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return (hours + "hr: " + minutes + "min: " + seconds + "sec");
  }


  return (
    <div>
      <Header />
      <div className='mt-[60px]'>
        <div className='flex flex-auto'>
          {parkingSlots.map((parkingSlot, index) => (
            <Parking
              id={index}
              key={index}
              size={parkingSlot.size}
              status={parkingSlot.status}
              timeString={parkingSlot.timeString}
              onChecked={exitCar}
            />
          ))}
        </div>
        <div className='min-w-[1700px] flex'>
          <div className='inline-block bg-black w-[325px] h-[20px]'></div>
          <button className="inline-block font-bold py-0.5 px-4 rounded bg-green-500 text-white hover:bg-yellow-300" onClick={handleEntranceOne}>ENTER</button>
          <div className='inline-block bg-black w-[315px] h-[20px]'></div>
          <button className="inline-block font-bold py-0.5 px-4 rounded bg-green-500 text-white hover:bg-yellow-300" onClick={handleEntranceTwo}>ENTER</button>
          <div className='inline-block bg-black w-[307px] h-[20px]'></div>
          <button className="inline-block font-bold py-0.5 px-4 rounded bg-green-500 text-white hover:bg-yellow-300" onClick={handleEntranceThree}>ENTER</button>
          <div className='inline-block bg-black w-[327px] h-[20px]'></div>
        </div>
      </div>

      <CreateArea onAdd={addParkingSlot}
        handleEntranceOne={handleEntranceOne}
        handleEntranceTwo={handleEntranceTwo}
        handleEntranceThree={handleEntranceThree}
      />

      <Receipt
        totalTime={timeDisplay}
        totalPayment={clientTotalPayment}
      />

      <Footer />

    </div>
  )
}

export default App