import React from "react";
import * as C from "./styles";
import { Task } from "../../types/item";

interface TaskProps {
  task: Task;
}

const ListItem = ({ task }: TaskProps) => {
  const [isChecked, setIsChecked] = React.useState(task.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{task.name}</label>
    </C.Container>
  );
};

export default ListItem;
