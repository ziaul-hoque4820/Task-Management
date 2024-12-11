import Container from "../../components/Container"
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskTableHeader from "./TaskTableHeader";
import ModalPopap from "../../components/ModalPopap";
import { useState } from "react";
import NoData from "../../components/NoData";


// function NoData() {
//     return (
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell colSpan={6} className="text-center">No data found</Table.Cell>
//         </Table.Row>
//     )
// }


function TaskTable() {

    const [openModal, setOpenModal] = useState(false);
    const [tasks, setTasks] =useState([]);
    const [searchText, setSearchText] = useState('')

    const createHandler = (item) => {
        let updateTask = [
            item,
            ...tasks,
        ]
        setTasks(updateTask)
    }
    const taskEditHandler = (task) => {
        setTasks(tasks.map(item => {
            if (task.id == item.id) {
                return task;
            }else{
                return item;
            }
        }))
    }
    const deletHandler = (id) => {
        setTasks(tasks.filter(item => {
            return item.id != id;
        }))
        
    }
    const searchhandler = (text) => {
        setSearchText(text);
        
    }
    const updateTask = tasks.filter(item => {
        return item.title.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
        <Container className="mt-7">
            <div className="flex justify-end">
                <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">Add Task</Button>
                <Button onClick={() => setTasks([])} color="failure">Clear Tasks</Button>
            </div>
            <div className="p-3 mt-6 border rounded-sm">
                <TaskTableHeader onSearch={searchhandler} />
                <div>
                    <div className="overflow-x-auto">
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>#</Table.HeadCell>
                                <Table.HeadCell>Title</Table.HeadCell>
                                <Table.HeadCell>Description</Table.HeadCell>
                                <Table.HeadCell>Assigned To</Table.HeadCell>
                                <Table.HeadCell>Priority </Table.HeadCell>
                                <Table.HeadCell>Action</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {tasks.length == 0 ? <NoData /> : updateTask.map((task, index) => <TaskItem data={task} index={index} key={task.id} editTask={taskEditHandler} deletTask={deletHandler} />)} 
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
            <ModalPopap onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
        </Container>
    )
}

export default TaskTable