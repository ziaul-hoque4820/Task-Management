import { Table } from "flowbite-react";

function TaskItem() {

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>index</Table.Cell>
            <Table.Cell> Title </Table.Cell>
            <Table.Cell> Description </Table.Cell>
            <Table.Cell> countries </Table.Cell>
            <Table.Cell>Priority</Table.Cell>
            <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-4">
                    Edit
                </a>
                <a href="#" className="font-medium text-rose-600 hover:underline dark:text-rose-500">
                    Delete
                </a>
            </Table.Cell>
        </Table.Row>
    )
}

export default TaskItem