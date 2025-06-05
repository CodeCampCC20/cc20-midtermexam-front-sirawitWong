import * as Yup from "yup"
export const loginSchema = Yup.object({
    username: Yup.string().max(24, "maximum username length is 24 char").required("username is required"),
    password: Yup.string().max(24, "maximum password length is 24 char").required("please enter password")
})