import SeatRow from "./SeatRow.jsx";
import styles from './SeatComponent.module.scss';
import { useSelector, useDispatch } from 'react-redux'

const SeatGroup = ({category, price, seatRowData, groupIndex}) => {
  const seatData = useSelector((state) => state.seat.data);
  const updateData = (groupIndex, rowIndex) => {
    // console.log(groupIndex,rowIndex);
    let count =3; //10 3 6 
    for(let i=0;i<seatData[groupIndex].seatRowData[rowIndex].length;i++){
      
    }
  }
  // console.log(category);
  return (
    <div className={styles.seatgroup_container}>
    <div>
    <div className={styles.seatgroup_heading}>
    {category}-Rs. {price.toFixed(2)}
  </div>
  {seatRowData.map((data, index) => (
    <SeatRow rowId={data.rowId} seatRowData={data.seatRowData} groupIndex={groupIndex} rowIndex={index} updateData={updateData}/>
  ))}
  </div>
    </div>
  );
};

export default SeatGroup;
