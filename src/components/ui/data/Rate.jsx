"use client";
import styles from "../data/rate.module.css"

export default function Rate(props) {

  
  return(
      <progress className="progress progress-info w-56" value={100 * (props.cleartodo / props.todonum)} max="100"></progress>
  )
}