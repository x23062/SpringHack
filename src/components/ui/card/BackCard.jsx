"use client";
import styles from "./BackCard.module.css";
import { useEffect, useState } from "react";
import Date from "../data/date";
import Rate from "../data/Rate";
import Checkbox from "../button/Checkbox";

export default function BackCard() {
  const [value,setValue] = useState(0)
  const [todoNum,setTodoNum] = useState(0)
  const [clearTodo,setCT] = useState(0)

  useEffect(() => {
    // console.log(todoNum)
  },[todoNum])

  useEffect(() => {
    console.log(clearTodo)
  },[clearTodo])

  return (
      <div className={`${styles.back} w-4/5 h-96 card bg-base-100 shadow-xl"`}>
        <div className={styles.title}>
          <Date />
          <p className="card-CompleteRate">{ todoNum +"件中"+ clearTodo + "件が完成"}</p>
          <Rate value = {value} cleartodo = {clearTodo} todonum = {todoNum}/>
          <h2 className="schedule">スケジュール</h2>
          <Checkbox setvalue = {setValue} settodonum = {setTodoNum} cleartodo = {clearTodo} setct = {setCT}/>
        </div>
      </div>
  );
}
