import React, { useState } from 'react'
import styles from './ShowTime.module.scss';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from 'react-icons/md';
const ShowTime = () => {
  
  const data=[1,2,3,4,5,6,7,8,9];
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    // console.log(data.length/3,currentSlide);
    // console.log(window.innerWidth);
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length/3  ? currentSlide + 1 : 0);
  };
  return (
    <div className={styles.showtimecontainer}>
    <span className={`${styles.slide_btn}`} > 
    <button onClick={() => handleClick('left')} style={currentSlide === 0 ? {color:'rgba(194, 191, 191,0.4)'} : {}}><MdKeyboardArrowLeft /></button> </span>

    <div className={styles.showtimelist}>

      <ul style={{ transform: `translateX(-${currentSlide * 75}px)` }}>
      
      {data.map((d,i)=>(
        <li>
        <div className={styles.showtime_item}>
        10:45 {i}
        <div>
        Dolby 5.1
        </div>
        </div>
      </li>
      ))}
      </ul>

      </div>
      <span className={styles.slide_btn}> 
      <button onClick={() => handleClick()} style={currentSlide === data.length / 2  ? {color:'rgba(194, 191, 191,0.4)'} : {}}><MdKeyboardArrowRight/></button> </span>
          </div>
  )
}

export default ShowTime
