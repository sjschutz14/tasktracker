import { FaTimes } from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' onDoubleClick={() => 
        onToggle(task.id)}>
            <h3>{task.text}{' '} <FaTimes style={{ color: 'red', 
            cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
            <span>{ String( task.reminder )}</span>
        </div>
    )
}

export default Task
