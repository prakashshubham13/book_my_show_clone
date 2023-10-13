import React, { useState } from 'react'
import styles from './Ticket.module.scss';

import auto from '../../assets/ticket/auto.png';
import small_car from '../../assets/ticket/small_car.png';
import cycle from '../../assets/ticket/cycle.png';
import bus from '../../assets/ticket/bus.png';
import car from '../../assets/ticket/car.png';
import scooter from '../../assets/ticket/scooter.png';
import { selectTotalSeats } from '../../redux/seatSlice';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const Ticket = ({toggleTicketPopup}) => {
  const dispatch = useDispatch();
  const noOfSeats =useSelector((state) => state.seat.noOfSeats);
  const [seatNumber, updateSeatNumber] = useState(noOfSeats);
  return (
    <div className={styles.modal_container}>
    <div className={styles.ticket_container}>
      <h1>How Many Seats?</h1>
      <div className={styles.display_image}>
      <img src={scooter} alt='scooter' />
      </div>
      {/*<img src={small_car} />
      <img src={cycle} alt="cycle" />
      <img src={car} />
      
      <img src={auto} />
  <img src={bus} />*/}
  <div className={styles.seat_count}>
      <ul onClick={(e)=>{updateSeatNumber(Number(e.target.getAttribute('data-value')))}}>
      {Array(10).fill('').map(( _, index)=>(
        <li data-value={index+1} className={seatNumber === index+1 ? styles.selected : ''}>{index+1}</li>
      ))}
      </ul>
      </div>
      <div className={styles.categories}>
      <div>
      <span>Normal</span>
      <span>Rs. 180.00</span>
      <span>Available</span>
      </div>
      <div>
      <span>Normal</span>
      <span>Rs. 180.00</span>
      <span>Available</span>
      </div>
      <div>
      <span>Normal</span>
      <span>Rs. 180.00</span>
      <span>Available</span>
      </div>
      <div>
      <span>Normal</span>
      <span>Rs. 180.00</span>
      <span>Available</span>
      </div>
      </div>
      <div className={styles.btn} onClick={()=>{dispatch(selectTotalSeats(seatNumber));toggleTicketPopup(false);}}>Select Seats</div>
    </div>
    </div>
  )
}

export default Ticket
