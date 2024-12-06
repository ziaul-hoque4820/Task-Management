import * as yup from "yup";



export const popupFormValidation = yup.object({
    Title: yup.string().required().min(3).max(20),
    Description: yup.string().required().min(3).max(120),
    countries: yup.string().required(),
    Priority: yup.string().required(),
}).required();