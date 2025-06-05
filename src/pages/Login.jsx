import { useState } from "react"
import { useLoginStore } from "../store/loginStore"
import { Navigate } from "react-router"
import { loginSchema } from "../schemas/loginSchema"
import { yupToFormError } from "../utils/yupToFormError"

export default function Login() {
    const style = {
        input: "space-y-2",
        textErr: "text-red-500"   
    }

    const isLogin = useLoginStore(state => state.isLogin)
    const login = useLoginStore(state => state.login)

    const [form,setForm] = useState({
        username: "",
        password: ""
    })

    const [error,setError] = useState({})

    const handleChange = (ev) => {
        setForm({...form, [ev.target.name]: ev.target.value})
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        try{
            await loginSchema.validate(form, {abortEarly: false});
            alert("logged in")
            setError({})
            login()
        }
        catch(err){
            const errorObject = yupToFormError(err)
            setError(errorObject)
        }

    }

    return (
        <div className="border justify-center">
            {!isLogin ? "" :<Navigate to={"/"}/>}
            <h1>Login</h1>
            <div className="flex justify-center">
            <form className={style.input} onSubmit={handleSubmit}>
                <div>
                    <input className="border" type="text" name="username" placeholder="username" onChange={handleChange}/>
                    <p className={style.textErr}>{error.username}</p>
                </div>
                <div>
                    <input className="border" type="password" name="password" placeholder="password" onChange={handleChange}/>
                    <p className={style.textErr}>{error.password}</p>
                </div>
                <button className="border" type="submit">Login</button>
            </form>
            </div>
        </div>
    )
}