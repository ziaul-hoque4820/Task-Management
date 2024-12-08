import { Table } from "flowbite-react";
import ModalPopap from "../../components/ModalPopap";
import { useState } from "react";
import { DeletModal } from "../../components/DeletModal";

function TaskItem({data, index, editTask, deletTask}) {

    const [openModal, setOpenModal] = useState(false);
    const [idopenModal, setIsOpenModal] = useState(false);

    let { title, description, assign, priority} = data;

    const editHandler = (item) => {
        editTask(item);
        
    }
    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell> {index + 1} </Table.Cell>
                <Table.Cell> {title} </Table.Cell>
                <Table.Cell> {description} </Table.Cell>
                <Table.Cell> {assign} </Table.Cell>
                <Table.Cell>{priority}</Table.Cell>
                <Table.Cell>
                    <button onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-4">
                        Edit
                    </button>
                    <button onClick={() => setIsOpenModal(true)} className="font-medium text-rose-600 hover:underline dark:text-rose-500">
                        Delete
                    </button>
                </Table.Cell>
            </Table.Row>

            <ModalPopap taskToEdit={data} onEdit={editHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
            <DeletModal onOpen={idopenModal} onClose={() => setIsOpenModal(false)} deletTask={deletTask} data={data}  />    
        </>
    )
}

export default TaskItem