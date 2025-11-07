 import { ListTask } from "./ListTask.jsx";
 
 export const Tasks = () => {
    const tasks = [
         { id: 1, tittle: "Tarea 1", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false },
         { id: 2, tittle: "Tarea 2", completed: false }


    ];
    return (
    < ListTask tasks = { tasks}/>
    )
}

