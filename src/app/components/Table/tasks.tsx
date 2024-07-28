import { IoMdTrash } from "react-icons/io";
import styles from "./tasks.module.css";


export default function Tasks({
  index,
  task,
  active,
  handleActiveTask,
  handleDeleteTask
}: {
  index: number;
  task: string;
  active: boolean;
  handleActiveTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
}) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.inputWrapper}>
        <div className={styles.checkboxdiv}>
          <input onChange={() => handleActiveTask(index)} className={styles.checkbox} checked={!active} type="checkbox" />
        </div>
        <p className={active ? styles.taskname : styles.tasknameChecked}>{task}</p>
      </div>
      <div onClick={() => handleDeleteTask(index)}>
        <IoMdTrash className={styles.trash} size='24px'  />
      </div>
    </div>
  )
}