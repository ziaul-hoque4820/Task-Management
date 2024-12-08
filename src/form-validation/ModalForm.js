import * as yup from "yup";



export const popupFormValidation = yup.object({
    title: yup.string().required().min(3).max(30),
    description: yup.string().required().min(3).max(120),
    assign: yup.string().required(),
    priority: yup.string().required(),
}).required();