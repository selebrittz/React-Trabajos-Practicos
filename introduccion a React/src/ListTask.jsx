// import { Tasks } from "./Tasks";

export const ListTask = ({tasks}) => {          

  return (
  <>
    <ul>
        {tasks.map((task) => (
            <li>{task.tittle}</li>
        ))}
     </ul>

  </>


  )
};