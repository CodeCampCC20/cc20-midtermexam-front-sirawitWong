import * as Yup from "yup"
export const loginSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("please enter password")
})