import { useForm } from "react-hook-form"
import { Button, Modal, Label, TextInput, Textarea, Select } from "flowbite-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { popupFormValidation } from "../form-validation/ModalForm";


function ModalPopap({onOpen, onClose, onCreate, taskToEdit, onEdit}) {

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(popupFormValidation),
    })
   
    const onSubmit = (data) => {
        if (taskToEdit) {
            onEdit(data);
        } else {
            onCreate(data);
        }

        reset();
        onClose();
    }

    let formData = taskToEdit || {
        id: crypto.randomUUID(),
        title: null,
        description: null,
        assign: null,
        priority: null
    }


    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()} >
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-center text-rose-600 text-xl font-bold dark:text-[#fffa65]">{taskToEdit ? "Edit Task" : "Add New Task"}</h3>
                        <form action="#" className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="text" className="text-[18px]" value="Title" />
                                </div>

                                {/* this input for every unik id for form data  */}
                                <input type="hidden" {...register('id')} defaultValue={formData.id} />

                                <TextInput defaultValue={formData.title} {...register('title')} id="title" type="text" />
                                {errors.title && <span className="text-rose-600">{errors.title.message} </span> }
                            </div>
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" className="text-[18px]" value="description" />
                                </div>
                                <Textarea defaultValue={formData.description} {...register('description')} id="description" />
                                {errors.description && <span className="text-rose-600">{errors.description.message} </span> }
                            </div>
                            <div className="w-2/3 mt-2">
                                <div className="mr-2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" className="text-[18px]" value="Assign to" />
                                    </div>
                                    <Select defaultValue={formData.assign} {...register('assign')} id="assign">
                                        <option value="Person One">Person One</option>
                                        <option value="Person Two">Person Two</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                        <option value="Person Five">Person Five</option>
                                    </Select>
                                    {errors.assign && <span className="text-rose-600">{errors.assign.message} </span> }
                                </div>
                            </div>
                            <div className="w-1/3 mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="priority" className="text-[18px]" value="priority " />
                                </div>
                                <Select defaultValue={formData.priority} {...register('priority')} id="priority">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="low">low</option>
                                </Select>
                                {errors.priority && <span className="text-rose-600">{errors.priority.message} </span> }
                            </div>
                            <Button type="submit" className="mt-4">{taskToEdit ? "Update Task" : "Add Task"}</Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default ModalPopap