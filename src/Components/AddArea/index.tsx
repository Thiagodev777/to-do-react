import React, { KeyboardEvent } from 'react'
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void;
}

const AddArea = ({onEnter}: Props) => {

  const [task, setTask] = React.useState('');
  const handleKeyUp = (event: KeyboardEvent) => {
    if(event.code === 'Enter' && task !== ''){
      onEnter(task)
      setTask('')
    }
  }

  return (
    <C.Container>
      <div className="image"><i className="bi bi-plus"></i></div>
      <input
      type="text"
      placeholder='Add new task...'
      value={task}
      onChange={e => setTask(e.target.value)}
      onKeyUp={handleKeyUp}
      />
    </C.Container>
  )
}

export default AddArea;