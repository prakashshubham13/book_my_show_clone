import Seat from "./Seat";
import styles from './SeatComponent.module.scss';
const SeatRow = ({ rowId, seatRowData, groupIndex, rowIndex, updateData }) => {
  const updateDataa = (groupIndex, rowIndex) => {
    // console.log(groupIndex,rowIndex,"---");
  }
  // console.log("ss",seatRowData);
  return (
    <div className={styles.seatrow_container} >
      <label style={{width:'20px',fontSize:'14px',color:"#b3b3b3  "}}>{rowId}</label>
      <div className={styles.row} onClick={(e)=>console.log(e.target.parentElement.nextSibling,e.target.parentElement.nextSibling.nextSibling)}>
        {seatRowData.map((data,index) => (
          <Seat seatId={data.seatId} type={data.type} groupIndex={groupIndex} rowIndex={rowIndex} seatIndex={index} updateData={updateData} />
        ))}
      </div>
    </div>
  );
};

export default SeatRow;
