"use client";
import { useEffect, useState } from "react";
import styles from "./date.module.css"


export default function GetDate(){
  const [dayOfWeekStr,setDayOfWeekStr] = useState("");
  const [today,setToday] = useState([new Date()]);

  useEffect(() => {
    const week = today[0].getDay();
    setDayOfWeekStr([ "日", "月", "火", "水", "木", "金", "土" ][week])
    console.log(dayOfWeekStr);
  },[dayOfWeekStr,today]);

  return(
    <div className={styles.date}>
      <h2>{today + " " + dayOfWeekStr}</h2>
    </div>
  )
}

