
import { Button, Modal, Label, TextInput, Textarea, Select } from "flowbite-react";

function ModalPopap({onOpen, onClose}) {


    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()} >
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-center text-rose-600 text-xl font-bold dark:text-[#fffa65]">Add New Task</h3>
                        <form action="#" className="flex flex-wrap">
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="text" className="text-[18px]" value="Title" />
                                </div>
                                <TextInput id="title" type="text" />
                            </div>
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="comment" className="text-[18px]" value="description" />
                                </div>
                                <Textarea id="description" rows={4} />
                            </div>
                            <div className="w-2/3 mt-2">
                                <div className="mr-2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="countries" className="text-[18px]" value="Select your country" />
                                    </div>
                                    <Select id="countries">
                                        <option value="Person One">Person One</option>
                                        <option value="Person Two">Person Two</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                        <option value="Person Five">Person Five</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-1/3 mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="countries" className="text-[18px]" value="Priority " />
                                </div>
                                <Select id="Priority">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="low">low</option>
                                </Select>
                            </div>
                            <Button type="submit" className="mt-4">I accept</Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default ModalPopap