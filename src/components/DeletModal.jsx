/* eslint-disable react/prop-types */

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeletModal({onOpen, onClose, deletTask, data}) {
    let {id} =data;
    
  return (
    <>
      <Modal show={onOpen} size="md" onClose={() => onClose()} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => onClose( deletTask(id))}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => onClose(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
