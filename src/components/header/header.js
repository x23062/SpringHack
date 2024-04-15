"use client";
import styles from "../header/header.module.css"
import Logo from "../header/logo"

export default function Header() {
  return (
    <div className={`${styles.header} w-full"`}>
      <Logo/>
    </div>
  )
}