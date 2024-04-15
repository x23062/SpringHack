"use client";
import { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
import { todoInfo } from "src/data/todoInfo";

export default function BackCard(props) {
  let num = 0;
  let cleaTodoArray = [];

  const sayPropsCT= (event) => {
    if(event.target.checked){
      props.setct(props.cleartodo + 1);
    }else{
      props.setct(props.cleartodo - 1);
    }
  }

  useEffect (() => {
    props.settodonum(num);
  },[num])

  return (
    <>
      {todoInfo.map((todo) => {
        num++;
        cleaTodoArray.push = false
        return (
          <>
            <div className={styles.Checkbox} key={todo.id}>
              <label className={styles.checkspace}>
                <input
                  type="checkbox"

                  onChange = {sayPropsCT}
                  className={styles.checkbox}
                />
                <span className={styles.checktext}>{todo.text}</span>
              </label>
            </div>
          </>
        );
      })
      }
    </>
  );
}
