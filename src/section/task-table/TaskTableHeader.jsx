import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

function TaskTableHeader() {
    return (
        <div className="flex justify-between items-center mt-5 mb-8">
            <h2 className="text-[35px] font-semibold text-red-600 dark:text-[#fffa65]">Your Task</h2>
            <div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                    </div>
                    <TextInput id="email4" type="email" rightIcon={IoSearch} required />
                </div>
            </div>
        </div>
    )
}

export default TaskTableHeader