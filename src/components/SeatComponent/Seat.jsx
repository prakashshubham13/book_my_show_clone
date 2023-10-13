import { useState } from 'react';
import styles from './SeatComponent.module.scss';
import { decrement, fetchUsers, increment } from '../../redux/seatSlice'
import { useDispatch } from 'react-redux';

const Seat = ({ seatId, type, groupIndex, rowIndex, seatIndex, updateData }) => {
  const dispatch = useDispatch();
  // console.log(groupIndex, rowIndex,"...");
  const [select, toggleSelect] = useState(false);
    return (
      <div onClick={(e)=> dispatch(increment(({groupIndex,rowIndex,seatIndex})))} data-group={groupIndex} data-row={rowIndex}>
        {type === "BOOKED" && <div className={`${styles.seat} ${styles.booked}`}>{seatId}</div>}
        {type === "AVAILABLE" && <div className={`${styles.seat} ${!select ? styles.available : styles.select}`}>{seatId}</div>}
        {type === "NOT_AVAILABLE" && (
          <div className={`${styles.seat} ${styles.not_available}`}>{seatId}</div>
        )}
        {type === "BLOCKED" && <div className={`${styles.seat} ${styles.blocked}`}>{seatId}</div>}
        {type === "SELECTED" && <div className={`${styles.seat} ${styles.select}`}>{seatId}</div>}
      </div>
    );
  };
  
  export default Seat;
  