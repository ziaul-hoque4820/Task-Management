import Container from "../../components/Container"
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskTableHeader from "./TaskTableHeader";
import ModalPopap from "../../components/ModalPopap";
import { useState } from "react";


// function NoData() {
//     return (
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell colSpan={6} className="text-center">No data found</Table.Cell>
//         </Table.Row>
//     )
// }


function TaskTable() {

    const [openModal, setOpenModal] = useState(false);


    return (
        <Container className="mt-7">
            <div className="flex justify-end">
                <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">Add Task</Button>
                <Button  color="failure">Clear Tasks</Button>
            </div>
            <div className="p-3 mt-6 border rounded-sm">
                <TaskTableHeader />
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
                                <TaskItem />
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
            <ModalPopap onOpen={openModal} onClose={() => setOpenModal(false)} />
        </Container>
    )
}

export default TaskTable