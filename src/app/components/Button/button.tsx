import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./button.module.css";

export default function Button(
    {
      label,
      variant, 
      ...rest
    }: 
    {
      label: string;
      variant?: boolean
    } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className={variant ? styles.taskButtonVariant : styles.taskButton} {...rest} >{label}</button>
  )
}