import React,{useEffect, useState} from 'react'
import { theatreData } from '../../utils/TheatreData';
import SeatGroup from '../../components/SeatComponent/SeatGroup';
import styles from './SeatLayout.module.scss';
import ShowTime from '../../components/ShowTimeComponent/ShowTime';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, fetchUsers, increment } from '../../redux/seatSlice'
import Ticket from '../../components/TicketComponent/Ticket';

const SeatLayout = () => {
  const noOfSeats =useSelector((state) => state.seat.noOfSeats);
  const seatData = useSelector((state) => state.seat.data);
  const [ticketPopup, toggleTicketPopup] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  return (
    <>
    {false?<h1>Loading</h1>:
        <div className={styles.layoutcontainer}>
        <div className={styles.header}>
        <div>
        <div className={styles.heading}>
        <h1>Jawan</h1>
        </div>
        <div className={styles.details}>
        <span>
        <span>PJP Cinepolis: Jamshedpur</span>
        <span> | </span>
        <span>Saturday, 07 Oct, 09:10 AM</span>
        </span>
        </div>
        </div>
        <div className={styles.right_subcontainer}>
        <div className={styles.btn} onClick={() => toggleTicketPopup(true)}>
        {noOfSeats} Tickets
        <span>
        <BsFillPencilFill/>
        </span>
        </div>
        <div style={{color:'#fff'}}>
        <AiOutlineClose/>
        </div>
        </div>
        </div>

        
        <ShowTime/>
        <div className={styles.setbox}>
    {seatData.map((data,index) => (
      <SeatGroup category={data.category} price={data.price} seatRowData={data.seatRowData} groupIndex={index}/>
          ))}
          <div className={styles.screen}>
          <img srcSet='https://assetscdn1.paytm.com/movies_new/_next/static/media/screen-icon.8dd7f126.svg' alt="screen"/>
          </div>
          </div>
         {/* <div className={styles.book_container}>
          <button className={styles.book_btn}>Pay Rs.80,000.70</button>
    </div>*/}
          <div className={styles.category_list}>
          <div className={styles.category_item}>
          <div className={`${styles.box} ${styles.available}`}></div>
          <div className={styles.text}>Available</div>
          </div>
          <div className={styles.category_item}>
          <div className={`${styles.box} ${styles.selected}`}></div>
          <div className={styles.text}>Selected</div>
          </div>
          <div className={styles.category_item}>
          <div className={`${styles.box} ${styles.booked}`}></div>
          <div className={styles.text}>Sold</div>
          </div>
          </div>
        </div>
    }
    {ticketPopup && <Ticket toggleTicketPopup={toggleTicketPopup}/>}
    </>
  )
}

export default SeatLayout
